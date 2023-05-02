import { initializeUniverse, nextGeneration } from '../src';

describe('Game of Life', () => {
    test('initializeUniverse creates Universe of specified size', () => {
        const universe = initializeUniverse(10, 10);
        expect(universe.length).toBe(10);
        expect(universe[0].length).toBe(10);
    });

    test('nextGeneration generates correctly next stage', () => {
        const inputUniverse: boolean[][] = [
            [true, false, true, false, false],
            [false, true, false, true, false],
            [true, true, false, false, false],
            [false, false, true, true, true],
            [true, true, true, false, true],
        ];

        const expectedUniverse: boolean[][] = [
            [false, false, false, false, false],
            [false, false, false, false, true],
            [true, true, false, false, false],
            [false, false, false, false, false],
            [false, false, false, false, false],
        ];

        const outputUniverse = nextGeneration(inputUniverse);
        expect(outputUniverse).toEqual(expectedUniverse);
    });
});
