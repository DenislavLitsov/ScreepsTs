import { BaseCreep } from "../creeps/base-creep";

export class CreepersNeeded{
    creep: BaseCreep;
    count: number;
}

export class RoomSettings{
    name: string;
    roomSpawns: string[];
    creepsNeeded: CreepersNeeded[];
}