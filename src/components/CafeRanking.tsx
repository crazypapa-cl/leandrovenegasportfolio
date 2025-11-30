'use client';

import { useEffect, useState } from 'react';
import { Card } from '@/components/ui/Card';
import { H2, Paragraph } from '@/components/ui/Typography';
import { Rating } from '@/components/ui/Rating';

interface Cafe {
    id: string;
    ranking: number;
    nombre: string;
    puntuacion: string; // Numeric coming from DB might be string in JSON
    total_resenas: number;
    direccion: string;
}

export function CafeRanking() {
    const [cafes, setCafes] = useState<Cafe[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchRanking() {
            try {
                const res = await fetch('/api/cafeterias/ranking');
                if (res.ok) {
                    const data = await res.json();
                    setCafes(data);
                }
            } catch (error) {
                console.error('Error fetching ranking:', error);
            } finally {
                setLoading(false);
            }
        }

        fetchRanking();
    }, []);

    if (loading) {
        return <Paragraph className="text-center">Cargando ranking...</Paragraph>;
    }

    return (
        <div className="space-y-4">
            <H2 className="text-center mb-8">Top Cafeterías en Valparaíso</H2>
            {cafes.map((cafe) => (
                <Card key={cafe.id} className="flex items-center justify-between p-4 bg-gray-800/50 hover:bg-gray-800 transition-colors">
                    <div className="flex items-center gap-4">
                        <span className="text-3xl font-bold text-indigo-500">#{cafe.ranking}</span>
                        <div>
                            <h3 className="text-xl font-semibold text-white">{cafe.nombre}</h3>
                            <p className="text-sm text-gray-400">{cafe.direccion}</p>
                        </div>
                    </div>
                    <div className="text-right">
                        <Rating className="text-xl">{cafe.puntuacion} ★</Rating>
                        <p className="text-xs text-gray-500">{cafe.total_resenas} reseñas</p>
                    </div>
                </Card>
            ))}
        </div>
    );
}
