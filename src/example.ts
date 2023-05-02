import { gameOfLife, initializeUniverse, Universe } from './index';

// Init 10x10 universe with random cell states
let universe = initializeUniverse(10, 10);

// Display the initial universe
console.log("Initial Universe:");
displayUniverse(universe);

// Compute and display the next 5 generations
const nextGenerations = gameOfLife(universe, 5);
for (let i = 0; i < nextGenerations.length; i++) {
    console.log(`\nGeneration ${i + 1}:`);
    displayUniverse(nextGenerations[i]);
}

function displayUniverse(universe: Universe): void {
    const rows = universe.length;
    const cols = universe[0].length;

    for (let i = 0; i < rows; i++) {
        let row = "";
        for (let j = 0; j < cols; j++) {
            row += universe[i][j] ? "██" : "░░";
        }
        console.log(row);
    }
}