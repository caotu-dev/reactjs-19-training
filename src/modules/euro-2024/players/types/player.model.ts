export interface TEuroPlayerStats {
    _id: string;
    name: string;
    goals: number;
    assists: number;
    appearances: number;
    firstTeamAppearances: number;
    minutesPlayed: number;
    teamName: string;
    team: {
        _id: string;
        name: string;
    };
    position: string;
    age: number;
    dateOfBirth: string;
    club: string;
    redCards: number;
    yellowCards: number;
}

export interface TEuroPlayerDTO {
    status: number;
    data: TEuroPlayerStats[];
}

export interface TEuroPlayerRanking {
    _id: string;
    rank: number;
    name: string;
    team: string;
    value: number;
}
