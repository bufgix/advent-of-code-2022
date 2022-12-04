import { describe, test, expect } from "vitest";

import { solution1, solution2 } from "./index.js";
import { input } from "./input";

const testInput = `2-4,6-8
2-3,4-5
5-7,7-9
2-8,3-7
6-6,4-6
2-6,4-8`;

describe("day 3", () => {
  test("q1", () => {
    expect(solution1(testInput)).toBe(2);
    expect(solution1(input)).toMatchSnapshot();
  });

  test("q1", () => {
    expect(solution2(testInput)).toBe(4);
    expect(solution2(input)).toMatchSnapshot();
  });
});
