import { BaseApi } from "./base.api";

const baseUrl = `/euro-2024/teams`;

export const EuroTeamApi = {
    getTeams: async () => {
        const response: any = await BaseApi.getData(`${baseUrl}`);
        return response;
    },
}
