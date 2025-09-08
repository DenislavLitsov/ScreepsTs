import { BaseCreep } from "./base-creep";

export class MinerCreep implements BaseCreep {
    
    readonly Name: string = 'Miner';
    readonly Body: BodyPartConstant[] = ["move", "work", "carry", "carry", "carry"];
    readonly BodyCost: number = 300;

    work(creep: Creep): void {
        console.log(`${creep.name} is mining`);
    }
}