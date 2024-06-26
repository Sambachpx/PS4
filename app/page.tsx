"use client";
import { useState } from "react";
import { Token, GameState, gameStates, handleClick } from "../utils/gameState";

export default function Home() {
  const [gameState, setGameState] = useState<GameState>({
    grid: Array(6)
      .fill(null)
      .map(() => Array(7).fill(null)) as Token[][],
    currentPlayer: 1 as Token,
    state: gameStates.LOBBY,
  });

  function columnClick(coordinateColumn: number) {
    console.log("test", coordinateColumn);
    setGameState((prevGameState) =>
      handleClick(coordinateColumn, prevGameState)
    );
    const winner =
      checkHorizontal(gameState.grid) ||
      checkVertical(gameState.grid) ||
      checkDiagonal(gameState.grid);

    if (winner) {
      alert(`${winner === 1 ? player1 : player2} a gagné !`);
      startGame();
    } else if (GridFull(gameState.grid)) {
      alert("toutes les cases sont remplies, match nul");
      startGame();
    }
  }

  function GridFull(grid: Token[][]): boolean {
    for (let i = 0; i < grid.length; i++) {
      for (let a = 0; a < grid[i].length; a++) {
        if (grid[i][a] === null) {
          return false;
        }
      }
    }
    return true;
  }

  function checkHorizontal(grid: Token[][]): Token | null {
    for (let row = 0; row < grid.length; row++) {
      for (let col = 0; col < grid[0].length - 3; col++) {
        if (
          grid[row][col] &&
          grid[row][col] === grid[row][col + 1] &&
          grid[row][col] === grid[row][col + 2] &&
          grid[row][col] === grid[row][col + 3]
        ) {
          return grid[row][col];
        }
      }
    }
    return null;
  }

  function checkVertical(grid: Token[][]): Token | null {
    for (let col = 0; col < grid[0].length; col++) {
      for (let row = 0; row < grid.length - 3; row++) {
        if (
          grid[row][col] &&
          grid[row][col] === grid[row + 1][col] &&
          grid[row][col] === grid[row + 2][col] &&
          grid[row][col] === grid[row + 3][col]
        ) {
          return grid[row][col];
        }
      }
    }
    return null;
  }

  function checkDiagonal(grid: Token[][]): Token | null {
    for (let row = 0; row < grid.length - 3; row++) {
      for (let col = 0; col < grid[0].length - 3; col++) {
        if (
          grid[row][col] &&
          grid[row][col] === grid[row + 1][col + 1] &&
          grid[row][col] === grid[row + 2][col + 2] &&
          grid[row][col] === grid[row + 3][col + 3]
        ) {
          return grid[row][col];
        }
      }
    }
    return null;
  }

  const [player1, setplayer1] = useState("");
  const [player2, setplayer2] = useState("");

  function startGame() {
    const player1 = prompt("entrer le nom du joueur 1");
    const player2 = prompt("entrer le nom du joueur 2");

    if (!player1 || !player2) {
      alert("entrer les noms des joueurs");
      return;
    }

    setplayer1(player1);
    setplayer2(player2);
    setGameState({
      grid: Array(6)
        .fill(null)
        .map(() => Array(7).fill(null)) as Token[][],
      currentPlayer: 1,
      state: gameStates.PLAY,
    });
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h2 className="mb-4">
        Au tour de joueur : {gameState.currentPlayer === 1 ? player1 : player2}
      </h2>
      <button className="border border-black" onClick={startGame}>
        Commencer à jouer
      </button>
      <div className="grid grid-cols-7 border-1 border-black">
        {gameState.grid.map((row: Token[], rowCoordinate: number) =>
          row.map((cell: Token, columnCoordinate: number) => (
            <div
              key={`${rowCoordinate}-${columnCoordinate}`}
              className="border-2 w-10 h-10 flex items-center justify-center"
              onClick={() => columnClick(columnCoordinate)}
            >
              {cell === 1 ? "🔴" : cell === 2 ? "🟡" : null}
            </div>
          ))
        )}
      </div>
    </main>
  );
}
