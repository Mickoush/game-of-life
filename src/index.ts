// Type alias for the Universe
export type Universe = boolean[][];

// Function that counts the living neighbors for a cell
const countLiveNeighbors = (universe: Universe, row: number, col: number): number => {
    const rowsCount = universe.length;
    const colsCount = universe[0].length;

    let count = 0;

    // Loop over neighboring cells and count the living ones
    for (let i = -1; i <= 1; i++) {
        let r = row + i;
        // Handle wrapping around the edges of the Universe
        r = r < 0 ? rowsCount + r : r >= rowsCount ? r - rowsCount : r;
        for (let j = -1; j <= 1; j++) {
            if (!(i == 0 && j == 0)) {
                let c = col + j;
                // Handle wrapping around the edges of the Universe
                c = c < 0 ? colsCount + c : c >= colsCount ? c - colsCount : c;

                count += universe[r][c] ? 1 : 0;
            }
        }
    }

    return count;
}

// Function that initializes a random Universe of specified size
export const initializeUniverse = (rows: number, cols: number): Universe => {
    const universe: Universe = [];
    for (let i = 0; i < rows; i++) {
        const row: boolean[] = [];
        for (let j = 0; j < rows; j++) {
            row.push(Math.random() >= 0.5);
        }
        universe.push(row);
    }

    return universe;
}

// The main function of the library. It takes the initial state of the Universe
// and computes next generations for specified number of times.
export const gameOfLife = (initialState: Universe, numOfGenerations: number): Universe[] => {
    const allStates: Universe[] = [];
    let currentState = initialState;

    for (let i = 0; i < numOfGenerations; i++) {
        currentState = nextGeneration(currentState);
        allStates.push(currentState);
    };

    return allStates;
};

// Function that computes the next generation of the Universe
export const nextGeneration = (universe: Universe): Universe => {
    const newUniverse: Universe = [];
    const rows = universe.length;
    const cols = universe[0].length;

    for (let i = 0; i < rows; i++) {
        const newRow: boolean[] = [];
        for (let j = 0; j < rows; j++) {
            const aliveNeighbors = countLiveNeighbors(universe, i, j);
            let isAlive = universe[i][j];

            if (isAlive && (aliveNeighbors < 2 || aliveNeighbors > 3)) {
                // Any live cell with fewer than two live neighbours dies, as if by underpopulation.
                // Any live cell with more than three live neighbours dies, as if by overpopulation.
                isAlive = false
            } else if (aliveNeighbors === 3) {
                // Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.
                isAlive = true;
            }

            newRow.push(isAlive);
        }
        newUniverse.push(newRow);
    }

    return newUniverse;
}