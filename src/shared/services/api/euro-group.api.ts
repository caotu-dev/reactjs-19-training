import { sortArrayByKey, sortByMultipleKeys } from "@/shared/utils/common.utils";

const baseUrl = `${process.env.NEXT_PUBLIC_APP_URL}/api/euro-2024/groups`;

export const EuroGroupApi = {
    listGroups: async () => {
        const apiRequest: any = await fetch(`${baseUrl}`);
        const response = await apiRequest.json();
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
        const apiRequest: any = await fetch(`${baseUrl}/${id}`);
        const response = await apiRequest.json();
        return response;
    },

    getGroupTeamsById: async (id: string) => {
        const apiRequest: any = await fetch(`${baseUrl}/${id}/teams`);
        const response = await apiRequest.json();
        return response;
    },

    getGroupMatchesById: async (id: string) => {
        const apiRequest: any = await fetch(`${baseUrl}/${id}/matches`);
        const response = await apiRequest.json();
        return response;
    },
}