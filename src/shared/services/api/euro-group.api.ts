import { sortArrayByKey, sortByMultipleKeys } from "@/shared/utils/common.utils";
import { BaseApi } from "./base.api";
const baseUrl = `/euro-2024/groups`;

export const EuroGroupApi = {
    listGroups: async () => {
        const response: any = await BaseApi.getData(`${baseUrl}`);
        if(!response?.data) return false;

        const sortedGroups = sortArrayByKey([...response?.data], 'name')
        return {
            ...response,
            data: sortedGroups?.map(group => {
                const keysSort: any = [
                    { name: 'points', direction: 'desc' },
                    { name: 'goalDifference', direction: 'desc' }
                ];
                const sortedTeams = sortByMultipleKeys([...group?.teams], keysSort)
                return {
                    ...group,
                    teams: [...sortedTeams]
                }
            })
        };
    },

    getGroupById: async (id: string) => {
        const response: any = await BaseApi.getData(`${baseUrl}/${id}`);
        return response;
    },

    getGroupTeamsById: async (id: string) => {
        const response: any = await BaseApi.getData(`${baseUrl}/${id}/teams`);
        return response;
    },

    getGroupMatchesById: async (id: string) => {
        const response: any = await BaseApi.getData(`${baseUrl}/${id}/matches`);
        return response;
    },
}