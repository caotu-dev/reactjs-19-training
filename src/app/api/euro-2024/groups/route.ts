import { euroGetRequestHeaders } from "@/core/constants/euro-api-config";
import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';
// or
// Revalidate at most every hour
// fetch('https://...', { next: { revalidate: 3600 } })

export async function GET(request: Request) {
    const response = await fetch(`${process.env.EURO_API_URL}/groups`, {
        method: "GET",
        headers: euroGetRequestHeaders,
    });
    const data = await response.json()
    return NextResponse.json({ status: response.status, data })
}
