import { Constants } from "./constants/constants";
import { CreepNameGenerator } from './creeps/creep-name-generator';

export class Engine {
    static validateAndCreateMiningCreeps() {
        Constants.RoomSettings.forEach(roomSetting => {
            let room = Game.rooms[roomSetting.name];
            roomSetting.roomSpawns.forEach(element => {

                let spawner = Game.spawns[element];
                // Read isActive. Must be true to be able to work
                if (spawner.spawning || !spawner.isActive())
                    return;

                roomSetting.creepsNeeded.forEach(creepNeeded => {
                    let creeps = room.find(FIND_MY_CREEPS);
                    if (creeps.filter(x => x.name.includes(creepNeeded.creep.Name)).length < creepNeeded.count
                        && spawner.store.getUsedCapacity(RESOURCE_ENERGY) >= creepNeeded.creep.BodyCost) {
                        spawner.spawnCreep(creepNeeded.creep.Body, creepNeeded.creep.getNextName());
                    }
                });
            });
        });
    }
}