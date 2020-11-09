import { board, checkWinner } from "../game";

describe("game", () => {
  test("controlla array bidimensionale di dimensioni 3x3", () => {
    expect(board.length).toEqual(3);
    expect(board[0].length).toEqual(3);
    expect(board[1].length).toEqual(3);
    expect(board[2].length).toEqual(3);
  });

  test("verifica allineamenti 1", () => {
    const board = ["X", " ", " ", " ", "X", " ", " ", " ", "X"];

    expect(checkWinner(board, "X")).toBe(true);
  });

  //   test("verifica allineamenti 2", () => {
  //     const board = [
  //       [" ", "X", " "],
  //       [" ", "X", " "],
  //       [" ", " ", "X"],
  //     ];

  //     expect(checkWinner(board, "X")).toBe(false);
  //   });
});
