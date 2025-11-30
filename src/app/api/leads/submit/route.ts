import { NextResponse } from 'next/server';
import { query } from '@/lib/db';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { nombre, email, telefono } = body;

        // Validate required fields
        if (!nombre || !email) {
            return NextResponse.json(
                { error: 'Nombre y email son requeridos' },
                { status: 400 }
            );
        }

        // Basic email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return NextResponse.json(
                { error: 'Email inválido' },
                { status: 400 }
            );
        }

        // Save to database
        await query(
            'INSERT INTO leads (nombre, email, telefono) VALUES ($1, $2, $3)',
            [nombre, email, telefono || null]
        );

        // Return success with PDF download link
        return NextResponse.json({
            success: true,
            message: 'Datos guardados exitosamente',
            downloadUrl: '/ebooks/guia-google-maps.pdf'
        });
    } catch (error) {
        console.error('Error saving lead:', error);
        return NextResponse.json(
            { error: 'Error al procesar la solicitud' },
            { status: 500 }
        );
    }
}
