import { describe, test, expect } from "vitest";

import { solution1, solution2 } from "./index.js";
import { input } from "./input";

const testInput = `vJrwpWtwJgWrhcsFMMfFFhFp
jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL
PmmdzqPrVvPwwTWBwg
wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn
ttgJtRGJQctTZtZT
CrZsJsPPZsGzwwsLwLmpwMDw`;

describe("day 3", () => {
  test("q1", () => {
    expect(solution1(testInput)).toBe(157);
    expect(solution1(input)).toMatchSnapshot();
  });

  test("q2", () => {
    expect(solution2(testInput)).toBe(70);
    expect(solution2(input)).toMatchSnapshot();
  });
});
