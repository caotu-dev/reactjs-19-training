const baseUrl = `${process.env.NEXT_PUBLIC_APP_URL}api`;

export const BaseApi = {
    getData: async (url: string) => {
        try {
            const apiRequest: any = await fetch(`${baseUrl}/${url}`);
            const response = await apiRequest.json();
            return response;
        } catch (err) {
            return false;
        }
    },
}
