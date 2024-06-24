const baseUrl = `${process.env.NEXT_PUBLIC_APP_URL}api/euro-2024/teams`;

export const EuroTeamApi = {
    getTeams: async () => {
        try {
            const apiRequest: any = await fetch(`${baseUrl}`);
            const response = await apiRequest.json();
            return response;
        } catch (err) {
            console.log(err)
        }
    },
}
