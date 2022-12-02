import { describe, test, expect } from "vitest";

import { solution1, solution2 } from "./index";

const testInput = `1000
2000
3000

4000

5000
6000

7000
8000
9000

10000`;

describe("day 1", function () {
  test("q1", function () {
    expect(solution1(testInput)).toBe(24000);
  });
  

  test("q2", function () {
    expect(solution2(testInput)).toBe(45000);
  });
});
