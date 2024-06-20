import { euroGetRequestHeaders } from "@/core/constants/euro-api-config";

export async function getMatchById(matchId: string) {
    const response = await fetch(`${process.env.EURO_API_URL}/matches/${matchId}`, {
        method: "GET",
        headers: euroGetRequestHeaders
    });
    const data = await response.json();
    return { status: response.status, data }
}

export async function getTeamById(teamId: string) {
    const response = await fetch(`${process.env.EURO_API_URL}/teams/${teamId}`, {
        method: "GET",
        headers: euroGetRequestHeaders
    });
    const data = await response.json();
    return { status: response.status, data }
}