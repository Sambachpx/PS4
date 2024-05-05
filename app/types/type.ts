export enum playerColors {
  RED = "red",
  YELLOW = "yellow",
}

export type player = {
  id: string;
  name: string;
  color?: playerColors;
  isCurrent: boolean;
};

export enum CellState {
  EMPTY = "empty",
  RED = "red",
  YELLOW = "yellow",
}

export enum GameState {
  WAITING = "waiting",
  IN_PROGRESS = "in_progress",
  FINISHED = "finished",
}

export enum GameResult {
  RED_WIN = "red_win",
  YELLOW_WIN = "yellow_win",
  DRAW = "draw",
}
