# Game of Life

This project is created as part of my interview to Moravio.

# Usage

Import the `gameOfLife` function and call it with the initial state of the Universe and the number of generations to simulate. The function returns an array of all the states of the Universe after each generation.

```ts
import { gameOfLife } from 'game-of-life';

const rows = 10;
const cols = 10;
const initialState = initializeUniverse(rows, cols);
const numGenerations = 10;

const allStates = gameOfLife(initialState, numGenerations);
```

# Build

1. Run `yarn build` to build the library.
2. The output will be located in the `dist` folder.

# API

The library exports the following functions:

```ts
initializeUniverse(rows: number, cols: number): Universe
```

This function takes the number of rows and columns and returns a randomly initialized Universe, where each cell has a 50/50 chance of being alive or dead.

```ts
gameOfLife(initialState: Universe, numOfGenerations: number): Universe[]
```

This function takes the initial state of the Universe and the number of generations to simulate as input and returns an array of all the states of the Universe after each generation.

```ts
nextGeneration(universe: Universe): Universe
```

This function takes the current state of the Universe, computes next generation and returns it.

# License

This library is released under the MIT License. See LICENSE file for details.