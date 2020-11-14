import { board, checkWinner } from "../game";

describe("game", () => {
  test("controlla array bidimensionale di dimensioni 3x3", () => {
    expect(board.length).toEqual(3 * 3);
  });

  test("verifica vincitore 1", () => {
    const b1 = ["X", " ", " ", " ", "X", " ", " ", " ", "X"];
    const b2 = ["X", "O", "O", " ", "X", " ", " ", " ", "X"];
    const b3 = ["X", "X", "X", "O", "O", "O", " ", " ", " "];
    const b4 = ["X", "X", " ", " ", " ", " ", " ", "O", "O"];

    expect(checkWinner(b1, "X")).toBe(true);
    expect(checkWinner(b1, "O")).toBe(false);
    expect(checkWinner(b1, "Z")).toBe(false);
    expect(checkWinner(b2, "X")).toBe(true);
    expect(checkWinner(b2, "O")).toBe(false);
    expect(checkWinner(b3, "X")).toBe(true);
    expect(checkWinner(b3, "O")).toBe(true);
    expect(checkWinner(b4, "X")).toBe(false);
    expect(checkWinner(b4, "O")).toBe(false);
    expect.assertions(9);
  });
});
