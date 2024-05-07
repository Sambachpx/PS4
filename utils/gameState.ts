export enum gameStates {
  LOBBY = "LOBBY",
  PLAY = "PLAY",
  WIN = "WIN",
  DRAW = "DRAW",
}

export type Token = 1 | 2 | null;
export type Grid = Token[][];

export interface GameState {
  grid: Grid;
  currentPlayer: Token;
  state: gameStates;
}

let gameState: GameState = {
  grid: Array(6)
    .fill(null)
    .map(() => Array(7).fill(null)) as Grid,
  currentPlayer: 1,
  state: gameStates.LOBBY,
};

export function handleClick(column: number, gameState: GameState): GameState {
  if (gameState.state !== gameStates.PLAY) {
    return gameState;
  }

  const newGrid = gameState.grid.map((row) => [...row]);

  for (let row = newGrid.length - 1; row >= 0; row--) {
    if (newGrid[row][column] === null) {
      newGrid[row][column] = gameState.currentPlayer;
      break;
    }
  }

  const newGameState = {
    ...gameState,
    grid: newGrid,
    currentPlayer: gameState.currentPlayer === 1 ? 2 : (1 as Token),
  };

  return newGameState;
}

export function startGame() {
  gameState.state = gameStates.PLAY;
}
