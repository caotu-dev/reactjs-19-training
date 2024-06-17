import { delayInSec } from "@/shared/utils/common.utils";

export async function GET(request: Request) {
    await delayInSec();
    const response = await fetch(`${process.env.API_URL}products`);
    const data = await response.json()
    return Response.json({ status: response.status, data })
}

export async function POST(request: Request) {
    const body = await request.json();
    await delayInSec();
    const response = await fetch(`${process.env.API_URL}products/add`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
    })
    const data = await response.json()
    return Response.json({ status: response.status, data })
}