/**
 *
 * @param {string} input
 * @returns {number}
 */
export function solution1(input) {
  const pairs = input.split("\n");
  const contain = pairs.reduce((acc, pair) => {
    const [left, right] = pair.split(",");
    const [leftStart, leftEnd] = left.split("-").map(Number);
    const [rightStart, rightEnd] = right.split("-").map(Number);

    const leftRange = Array.from({ length: leftEnd - leftStart + 1 }).map(
      (_, i) => i + leftStart
    );
    const rightRange = Array.from({ length: rightEnd - rightStart + 1 }).map(
      (_, i) => i + rightStart
    );

    const leftStartIndex = leftRange.indexOf(rightRange[0]);
    const leftChunk = leftRange.slice(
      leftStartIndex,
      leftStartIndex + rightRange.length
    );
    const s1 = rightRange.every((v, index) => v === leftChunk[index]);

    const rightStartIndex = rightRange.indexOf(leftRange[0]);
    const rightChunk = rightRange.slice(
      rightStartIndex,
      rightStartIndex + leftRange.length
    );
    const s2 = leftRange.every((v, index) => v === rightChunk[index]);

    if (s1 || s2) {
      return acc + 1;
    }

    return acc;
  }, 0);

  return contain;
}

/**
 *
 * @param {string} input
 * @returns {number}
 */
export function solution2(input) {
  const pairs = input.split("\n");
  const contain = pairs.reduce((acc, pair) => {
    const [left, right] = pair.split(",");
    const [leftStart, leftEnd] = left.split("-").map(Number);
    const [rightStart, rightEnd] = right.split("-").map(Number);

    const leftRange = Array.from({ length: leftEnd - leftStart + 1 }).map(
      (_, i) => i + leftStart
    );
    const rightRange = Array.from({ length: rightEnd - rightStart + 1 }).map(
      (_, i) => i + rightStart
    );

    const s1 = leftRange.some((e) => rightRange.includes(e));
    const s2 = rightRange.some((e) => leftRange.includes(e));

    if (s1 || s2) {
      return acc + 1;
    }

    return acc;
  }, 0);

  return contain;
}
