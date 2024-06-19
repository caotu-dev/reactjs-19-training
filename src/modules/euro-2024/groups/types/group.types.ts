export interface TEuroTeam {
    team: {
        _id: string,
        name: string,
        players: string[],
        coach: string,
        championships: number,
        runnersUp: number,
        groupId: string,
        captain: string,
        group: string,
        imageUrl: string,
    },
    points: number,
    matchesPlayed: number,
    wins: number,
    draws: number,
    losses: number,
    goalsScored: number,
    goalsConceded: number,
    goalDifference: number,
}
export interface TEuroGroup {
    _id: string
    name: string
    teams: TEuroTeam[]
}

export interface TEuroGroupDTO {
    status: number;
    data: TEuroGroup[]
}