import { formatIsoToHourMinutes, getRelativeDate, sortArrayByKey } from "@/shared/utils/common.utils";
import { BaseApi } from "./base.api";
const baseUrl = `/euro-2024/matches`;
export const EuroMatchApi = {
    getMatches: async () => {
        const response: any = await BaseApi.getData(`${baseUrl}`);
        if(!response?.data) return false;

        const sortedMatches = sortArrayByKey([...response?.data], 'date')
        return {
            ...response,
            data: sortedMatches?.map(match => {
                const relativeDate = getRelativeDate(match?.date);
                const time = formatIsoToHourMinutes(match?.date);
                return {
                    ...match,
                    relativeDate,
                    time
                }
            })
        }
    },

    getMatchById: async (id: string) => {
        const response: any = await BaseApi.getData(`${baseUrl}/${id}`);
        return response;
    },
}