export class CreepNameGenerator {
    // if max = 3 will return 0 1 2 
    public static getRandomInt(max: number): number {
        return Math.floor(Math.random() * max);
    }
}