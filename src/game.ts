type Board = string[];

export const board: Board = [" ", " ", " ", " ", " ", " ", " ", " ", " "];

export function switchPlayer(p: number) {
  return (p + 1) % 2;
}

export function checkWinner(board: Board, player: string) {
  const b1 = ["X", " ", " ", " ", "X", " ", " ", " ", "X"];

  return false;
}
