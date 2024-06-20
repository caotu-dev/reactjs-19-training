import { ReactNode } from "react";

export interface TEuroPlayer {
    player: string;
    status: string;
}

export interface TEuroLineup {
    formation: string;
    players: TEuroPlayer[];
}

export interface TEuroTeamDetails {
    _id: string;
    name: string;
    players: string[];
    coach: string;
    championships: number;
    runnersUp: number;
    groupId: string;
    captain: string;
    group: string;
    imageUrl: string;
}

export interface TEuroTeam {
    team: TEuroTeamDetails;
    score: number;
    lineup: TEuroLineup;
}

export interface TEuroMatchEvent {
    minute: number;
    type: string;
    team: string;
    scoringPlayer?: string;
    assistingPlayer?: string;
    cardColor?: string;
    bookedPlayer?: string;
    subType?: string;
    joiningPlayer?: string;
    leavingPlayer?: string;
}

export interface TEuroMatch {
    _id: string;
    number: number;
    stage: string;
    date: string;
    time: string;
    isLive: boolean;
    relativeDate: string;
    minutesCompleted: number;
    description: string;
    teamA: TEuroTeam;
    teamB: TEuroTeam;
    winningTeam: string;
    stadium: string;
    city: string;
    matchEvents: TEuroMatchEvent[];
    isFinished: boolean;
}

export interface TEuroMatchTab {
    id: number,
    selector: string,
    title: string,
    data?: TEuroMatch[],
    children?: React.ReactNode,
    isActive: boolean,
}

export interface TEuroMatchDTO {
    status: number;
    data: TEuroMatch[]
}
