import { sum } from "../calc";

test("test1", () => {
  const output = sum(1, 1);
  expect(output).toBe(2);
});

test("2 + 3 should be equal to 5", () => {
  const output = sum(2, 3);
  expect(output).toBe(5);
});
