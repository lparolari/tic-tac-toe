import * as _ from "lodash";

type Entity = string;
type Board = Entity[];

export const board: Board = [" ", " ", " ", " ", " ", " ", " ", " ", " "];

export function switchPlayer(p: number) {
  return (p + 1) % 2;
}

export function masks() {
  return [
    [1, 1, 1, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 1, 1, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 1, 1, 1],
    [1, 0, 0, 1, 0, 0, 1, 0, 0],
    [0, 1, 0, 0, 1, 0, 0, 1, 0],
    [0, 0, 1, 0, 0, 1, 0, 0, 1],
    [1, 0, 0, 0, 1, 0, 0, 0, 1],
    [0, 0, 1, 0, 1, 0, 1, 0, 0],
  ];
}

export function binarize(board: Board, player: string) {
  return board.map((x) => (x === player ? 1 : 0));
}

export function checkWinner(board: Board, player: string) {
  const b = binarize(board, player);

  for (const mask of masks()) {
    if (_.isEqual(b, mask)) return true;
  }

  return false;
}
