export class CreepNameGenerator {
    static getNextMinerName(): string {
        return 'Miner' + CreepNameGenerator.getRandomInt(1000).toString();
    }

    // if max = 3 will return 0 1 2 
    private static getRandomInt(max: number): number {
        return Math.floor(Math.random() * max);
    }
}