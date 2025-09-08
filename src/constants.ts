export class Constants {
    public static readonly MainRoomName = 'E33S32';
    public static readonly MainSpawnName = 'MainSpawn';

    public static readonly MiningCreepBody: BodyPartConstant[] = ["move", "work", "carry", "carry", "carry"];
    public static readonly MiningCreepBodyCost: number = 300;

    public static readonly RoomSettings = [{
        name: Constants.MainRoomName,
        roomSpawned: Constants.MainSpawnName,
        neededMiningCreeps: 3,
    }];
}