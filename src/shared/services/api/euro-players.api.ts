import { BaseApi } from "./base.api";

const baseUrl = `/euro-2024/players`;

export const EuroPlayerApi = {
    getPlayers: async () => {
        const response: any = await BaseApi.getData(baseUrl)
        return response;
    },

    getTopAssisters: async () => {
        const response: any = await BaseApi.getData(`${baseUrl}/top-assisters`);
        return response;
    },

    getTopScores: async () => {
        const response: any = await BaseApi.getData(`${baseUrl}/top-scores`);
        return response;
    },

    getPlayerById: async (id: string) => {
        const response: any = await BaseApi.getData(`${baseUrl}/${id}`);
        return response;
    },
}