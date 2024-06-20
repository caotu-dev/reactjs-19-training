import { formatIsoToHourMinutes, getRelativeDate, sortArrayByKey } from "@/shared/utils/common.utils";

const baseUrl = `${process.env.NEXT_PUBLIC_APP_URL}api/euro-2024/matches`;

export const EuroMatchApi = {
    getMatches: async () => {
        const apiRequest: any = await fetch(`${baseUrl}`);
        const response = await apiRequest.json();
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
        const apiRequest: any = await fetch(`${baseUrl}/${id}`);
        const response = await apiRequest.json();
        return response;
    },
}