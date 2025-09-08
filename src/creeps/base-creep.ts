export interface BaseCreep {

    readonly Name: string;
    readonly Body: BodyPartConstant[];
    readonly BodyCost: number;

    work(creep: Creep): void;
}