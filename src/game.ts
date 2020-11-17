import _ from "lodash";

export type Entity = string;
export type Board = Entity[];
export type Time = number;
export type Position = [number, number];

export const ROW = 3,
  COL = 3;

export const EMPTY: Entity = " ";
export const P1: Entity = "X";
export const P2: Entity = "O";

export const board: Board = [" ", " ", " ", " ", " ", " ", " ", " ", " "];
export const t: Time = 0;

export function incTime(t: Time): Time {
  return t + 1;
}

export function getPlayer(t: Time) {
  return t % 2 === 0 ? P1 : P2;
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
    const bOverlaps = _.zip(mask, b).map((x) =>
      x[0] === 1 && x[1] === 1 ? 1 : 0
    );
    if (_.isEqual(bOverlaps, mask)) return true;
  }

  return false;
}

function linearize(position: Position) {
  const i = position[0];
  const j = position[1];
  return i * 3 + j;
}

export function checkEmpty(board: Board, position: Position) {
  return board[linearize(position)] === EMPTY;
}

export function takeUp(
  board: Board,
  player: Entity,
  position: Position
): Board {
  const newBoard = _.clone(board);
  newBoard[linearize(position)] = player;
  return newBoard;
}
