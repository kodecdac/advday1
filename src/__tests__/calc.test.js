import { sum } from "../service/calc";

test("Testing Sum", () => {
  expect(sum(1, 1)).toBe(2);
  expect(sum(2, 2)).toEqual(4);
  expect(sum(1, 1)).not.toBe(1);
});
