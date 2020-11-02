import { hello } from "..";

test("greetings", () => {
    expect(hello()).toBe("World!");
});
