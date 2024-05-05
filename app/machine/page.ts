import { assign, createMachine } from "xstate";

enum gameStates {
  LOBBY = "LOBBY",
  PLAY = "PLAY",
  WIN = "WIN",
  DRAW = "DRAW",
}

export type Token = 1 | 2 | null;
type Grid = Token[][];

interface Context {
  grid: Grid;
  currentPlayer: Token;
}

interface eventClick {
  type: "click";
  row: number;
  column: number;
}

export const machine = createMachine({
  id: "game",
  initial: gameStates.LOBBY,
  context: {
    grid: Array(6)
      .fill(null)
      .map(() => Array(7).fill(null)) as Grid,
    currentPlayer: 1,
  },
  states: {
    LOBBY: {
      on: {
        join: {
          actions: ["joinGame"],
          target: "LOBBY",
        },
        leave: {
          actions: ["leaveGame"],
          target: "LOBBY",
        },
        chooseColor: {
          target: "LOBBY",
          actions: ["chooseColor"],
        },
        start: {
          target: "PLAY",
          actions: ["setCurrentPlayer"],
        },
      },
    },
    PLAY: {
      on: {
        click: {
          actions: assign((context, event) => {
            const grid = [...context.grid];
            grid[event.row][event.column] = context.currentPlayer;
            return { ...context, grid };
          }),
        },
      },
    },
    WIN: {
      on: {
        restart: {
          target: "LOBBY",
          actions: ["restart"],
        },
      },
    },
    DRAW: {
      on: {
        restart: {
          target: "LOBBY",
          actions: ["restart"],
        },
      },
    },
  },
});
