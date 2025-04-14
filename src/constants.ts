export class Constants {
    public static readonly MainRoomName = 'E14N58';
    public static readonly MainSpawnName = 'MainSpawn';

    public static readonly MiningCreepBody: BodyPartConstant[] = ["move", "work", "carry", "carry", "carry"];
    public static readonly MiningCreepBodyCost: number = 300;

    public static readonly RoomSettings = [{
        name: 'E14N58',
        roomSpawned: 'MainSpawn',
        neededMiningCreeps: 3,
    }];
}