import { euroGetRequestHeaders } from "@/core/constants/euro-api-config";
import { NextResponse } from 'next/server';

// Prenvent cache api response
export const dynamic = 'force-dynamic'
export const revalidate = 0;

export async function GET(request: Request) {
    const response = await fetch(`${process.env.EURO_API_URL}/matches`, {
        method: "GET",
        headers: euroGetRequestHeaders
    });
    const data = await response.json()
    return NextResponse.json({ status: response.status, data })
}
