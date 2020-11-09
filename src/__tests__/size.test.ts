import { switchPlayer } from "../game";
import { width, height } from "../size";

describe("game board", () => {
  test("it is a square", () => {
    expect(width).toEqual(height);
  });

  test("switch from p1=0 to p2=1", () => {
    expect(switchPlayer(0)).toEqual(1);
    expect(switchPlayer(1)).toEqual(0);
    expect(switchPlayer(2)).toEqual(1);
    expect(switchPlayer(3)).toEqual(0);
  });
});
