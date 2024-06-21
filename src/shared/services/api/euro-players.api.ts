const baseUrl = `${process.env.NEXT_PUBLIC_APP_URL}api/euro-2024/players`;

export const EuroPlayerApi = {
    getPlayers: async () => {
        const apiRequest: any = await fetch(`${baseUrl}`);
        const response = await apiRequest.json();
        return response;
    },

    getTopAssisters: async () => {
        const apiRequest: any = await fetch(`${baseUrl}/top-assisters`);
        const response = await apiRequest.json();
        return response;
    },

    getTopScores: async () => {
        const apiRequest: any = await fetch(`${baseUrl}/top-scores`);
        const response = await apiRequest.json();
        return response;
    },

    getPlayerById: async (id: string) => {
        const apiRequest: any = await fetch(`${baseUrl}/${id}`);
        const response = await apiRequest.json();
        return response;
    },
}