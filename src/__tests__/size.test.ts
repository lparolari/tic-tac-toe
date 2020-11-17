import { getPlayer } from "../game";
import { width, height } from "../size";

describe("game board", () => {
  test("it is a square", () => {
    expect(width).toEqual(height);
  });

  test("switch from p1=0 to p2=1", () => {
    expect(getPlayer(0)).toEqual("X");
    expect(getPlayer(1)).toEqual("O");
  });
});
