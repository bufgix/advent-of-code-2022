function parse(input) {
  return input
    .split("\n")
    .join(" ")
    .split("  ")
    .map((e) => {
      return e.split(" ").map(Number);
    })
    .map((e) => {
      return e.reduce((acc, curr) => acc + curr, 0);
    });
}

export function solution1(input) {
  return Math.max(...parse(input));
}

export function solution2(input) {
  return parse(input)
    .sort((a, b) => b - a)
    .splice(0, 3)
    .reduce((a, c) => a + c, 0);
}
