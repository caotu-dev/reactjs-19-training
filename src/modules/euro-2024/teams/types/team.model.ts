import { TEuroGroup } from "../../groups/types/group.types";

export interface TEuroTeam {
    _id: string;
    name: string;
    players: string[]; // Assuming players is an array of strings (player names or IDs)
    coach: string;
    championships: number;
    runnersUp: number;
    groupId: string;
    captain: string;
    group: TEuroGroup;
    imageUrl: string;
}
