import { describe, expect, test } from "vitest";
import { solution1, solution2 } from "./index";
import { input } from "./input";

const testInput = `A Y
B X
C Z`;

describe("day 2", () => {
  test("q1", () => {
    expect(solution1(testInput)).toBe(15);
    expect(solution1(input)).toMatchSnapshot();
  });

  test("q2", () => {
    expect(solution2(testInput)).toBe(12);
    expect(solution2(input)).toMatchSnapshot();
  });
});
