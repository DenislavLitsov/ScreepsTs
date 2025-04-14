import { Constants } from "./constants";
import { CreepNameGenerator } from './creep-name-generator';

export class Engine {
    static validateAndCreateMiningCreeps() {
        Constants.RoomSettings.forEach(roomSetting => {
            let room = Game.rooms[roomSetting.name];
            let spawner = Game.spawns[roomSetting.roomSpawned];
            if (spawner.isActive())
                return;

            let creeps = room.find(FIND_MY_CREEPS);
            if (creeps.filter(x=>x.name.includes('miner')).length < roomSetting.neededMiningCreeps
                && Game.spawns[roomSetting.roomSpawned].store.getUsedCapacity(RESOURCE_ENERGY) >= Constants.MiningCreepBodyCost) {
                Game.spawns[roomSetting.roomSpawned].spawnCreep(Constants.MiningCreepBody, CreepNameGenerator.getNextMinerName());
            }
        });
    }
}