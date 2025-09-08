import { CreepNameGenerator } from "./creep-name-generator";

export class BaseCreep {

    readonly Name: string;
    readonly Body: BodyPartConstant[];
    readonly BodyCost: number;

    work(creep: Creep){};

    getNextName(): string {
        return this.Name + '_' + CreepNameGenerator.getRandomInt(1000).toString();
    }

}