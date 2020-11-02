import { width, height } from "../size";

describe("game board", () => {
  test("it is a square", () => {
    expect(width).toEqual(height);
  });
});
