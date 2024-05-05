"use client";
import { useMachine } from "@xstate/react";
import { machine, Token } from "./machine/page";

export default function Home() {
  const [state, send] = useMachine(machine);
  const grid = state.context.grid;

  function test(indexRow: number, indexColumn: number) {
    console.log("test", indexRow, indexColumn);
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="grid grid-cols-7 border-1 border-black">
        {grid.map((row: Token[], rowCoordinate: number) =>
          row.map((cell: Token, columnCoordinate: number) => (
            <div
              key={`${rowCoordinate}-${columnCoordinate}`}
              className="border-2 w-10 h-10"
              onClick={() => test(rowCoordinate, columnCoordinate)}
            >
              {cell}
            </div>
          ))
        )}
      </div>
    </main>
  );
}
