import { delta } from "../delta";

test("delta restitusce prima cella se posizione corretta", () => {
  expect(delta(21)).toEqual(0);
});
