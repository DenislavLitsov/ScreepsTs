import { MinerCreep } from "../creeps/miner-creep";
import { RoomSettings } from "../settings/room-settings";

export class Constants {
    public static readonly MainRoomName = 'E33S32';
    public static readonly MainSpawnName = 'MainSpawn';

    public static readonly RoomSettings: RoomSettings[] = [{
        name: Constants.MainRoomName,
        roomSpawns: [Constants.MainSpawnName],
        creepsNeeded: [{creep: new MinerCreep(), count: 5}],
    }];
}