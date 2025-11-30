import { query, getClient } from './db';
import dotenv from 'dotenv';

dotenv.config();

const GOOGLE_PLACES_API_KEY = process.env.GOOGLE_PLACES_API_KEY;

interface Place {
    place_id: string;
    name: string;
    rating: number;
    user_ratings_total: number;
    formatted_address: string;
}

async function searchCafesInValparaiso(): Promise<string[]> {
    if (!GOOGLE_PLACES_API_KEY) {
        throw new Error('GOOGLE_PLACES_API_KEY is not defined');
    }

    const url = `https://maps.googleapis.com/maps/api/place/textsearch/json?query=cafeterias+in+Valparaiso&key=${GOOGLE_PLACES_API_KEY}`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.status !== 'OK') {
            console.error('Error searching places:', data.status, data.error_message);
            return [];
        }

        return data.results.map((result: any) => result.place_id);
    } catch (error) {
        console.error('Network error searching places:', error);
        return [];
    }
}

async function getPlaceDetails(placeId: string): Promise<Place | null> {
    if (!GOOGLE_PLACES_API_KEY) {
        throw new Error('GOOGLE_PLACES_API_KEY is not defined');
    }

    const fields = 'name,rating,user_ratings_total,formatted_address,place_id';
    const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=${fields}&key=${GOOGLE_PLACES_API_KEY}`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.status !== 'OK') {
            console.error(`Error getting details for ${placeId}:`, data.status);
            return null;
        }

        return data.result as Place;
    } catch (error) {
        console.error(`Network error getting details for ${placeId}:`, error);
        return null;
    }
}

export async function updateCafeRanking() {
    console.log('Starting ranking update...');

    // 1. Search for cafes
    const placeIds = await searchCafesInValparaiso();
    console.log(`Found ${placeIds.length} cafes.`);

    // 2. Get details for each cafe
    const cafes: Place[] = [];
    for (const id of placeIds) {
        const details = await getPlaceDetails(id);
        if (details) {
            cafes.push(details);
        }
        // Respect API rate limits (simple delay)
        await new Promise(resolve => setTimeout(resolve, 100));
    }

    // 3. Sort by rating (desc) and user_ratings_total (desc)
    cafes.sort((a, b) => {
        if (b.rating !== a.rating) {
            return b.rating - a.rating;
        }
        return b.user_ratings_total - a.user_ratings_total;
    });

    console.log('Cafes sorted.');

    // 4. Update Database
    const client = await getClient();
    try {
        await client.query('BEGIN');

        // Truncate table
        await client.query('TRUNCATE TABLE cafe_ranking');

        // Insert new rankings
        const insertQuery = `
      INSERT INTO cafe_ranking (id, ranking, nombre, puntuacion, total_resenas, direccion)
      VALUES ($1, $2, $3, $4, $5, $6)
    `;

        for (let i = 0; i < cafes.length; i++) {
            const cafe = cafes[i];
            await client.query(insertQuery, [
                cafe.place_id,
                i + 1,
                cafe.name,
                cafe.rating,
                cafe.user_ratings_total,
                cafe.formatted_address
            ]);
        }

        await client.query('COMMIT');
        console.log('Database updated successfully.');
    } catch (error) {
        await client.query('ROLLBACK');
        console.error('Error updating database:', error);
        throw error;
    } finally {
        client.release();
    }
}

export async function getRanking() {
    const result = await query('SELECT * FROM cafe_ranking ORDER BY ranking ASC');
    return result.rows;
}
