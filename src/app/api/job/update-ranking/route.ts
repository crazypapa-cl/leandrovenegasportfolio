import { NextResponse } from 'next/server';
import { updateCafeRanking } from '@/lib/ranking-service';

export async function GET(request: Request) {
    // Check for Vercel Cron secret or manual authorization
    const authHeader = request.headers.get('authorization');
    const cronSecret = request.headers.get('x-vercel-cron-secret');

    // Allow if it's a Vercel Cron job OR if the authorization header matches
    const isAuthorized =
        cronSecret === process.env.CRON_SECRET ||
        authHeader === `Bearer ${process.env.CRON_SECRET}`;

    if (!isAuthorized) {
        return new NextResponse('Unauthorized', { status: 401 });
    }

    try {
        await updateCafeRanking();
        return NextResponse.json({ success: true, message: 'Ranking updated successfully' });
    } catch (error) {
        console.error('Job failed:', error);
        return NextResponse.json({ success: false, message: 'Internal Server Error' }, { status: 500 });
    }
}
