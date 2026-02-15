import { NextRequest, NextResponse } from 'next/server';
import { v2 as cloudinary } from 'cloudinary';

// Configure Cloudinary
cloudinary.config({
    cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function GET(request: NextRequest) {
    try {
        const searchParams = request.nextUrl.searchParams;
        const folder = searchParams.get('folder') || '';

        // Check if Cloudinary is configured
        if (!process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME) {
            return NextResponse.json(
                { error: 'Cloudinary no está configurado. Por favor, agrega tus credenciales en el archivo .env.local' },
                { status: 500 }
            );
        }

        // Fetch resources from Cloudinary folder
        const result = await cloudinary.api.resources({
            type: 'upload',
            prefix: folder,
            max_results: 100,
            resource_type: 'image',
        });

        // Transform the response to include optimized URLs
        const images = result.resources.map((resource: any) => ({
            public_id: resource.public_id,
            url: resource.secure_url,
            width: resource.width,
            height: resource.height,
            format: resource.format,
            created_at: resource.created_at,
            // Optimized thumbnail URL
            thumbnail: cloudinary.url(resource.public_id, {
                transformation: [
                    { width: 400, height: 400, crop: 'fill', quality: 'auto', fetch_format: 'auto' }
                ]
            }),
            // Optimized full-size URL
            optimized: cloudinary.url(resource.public_id, {
                transformation: [
                    { width: 1200, quality: 'auto', fetch_format: 'auto' }
                ]
            }),
        }));

        return NextResponse.json({
            success: true,
            folder: folder || 'root',
            count: images.length,
            images,
        });

    } catch (error: any) {
        console.error('Error fetching Cloudinary images:', error);
        return NextResponse.json(
            {
                error: 'Error al obtener imágenes de Cloudinary',
                details: error.message
            },
            { status: 500 }
        );
    }
}
