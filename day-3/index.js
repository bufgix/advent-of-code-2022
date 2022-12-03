const upperCaseChars = Array.from(Array(26)).map((e, i) =>
  String.fromCharCode(i + 65)
);

const lowerCaseChars = Array.from(Array(26)).map((e, i) =>
  String.fromCharCode(i + 97)
);

const alphabet = [...lowerCaseChars, ...upperCaseChars];

const chunk = (arr, size) =>
  Array.from({ length: Math.ceil(arr.length / size) }, (_, i) =>
    arr.slice(i * size, i * size + size)
  );

/**
 *
 * @param {string} input
 */
export function solution1(input) {
  const rucksacks = input.split("\n");
  const sum = rucksacks.reduce((acc, rucksack) => {
    const leftSide = rucksack.slice(0, rucksack.length / 2);
    const rightSide = rucksack.slice(rucksack.length / 2);

    let sameChar = null;
    for (let i = 0; i < leftSide.length; i++) {
      if (sameChar) break;
      const charLeft = leftSide[i];
      for (let j = 0; j < rightSide.length; j++) {
        const chartRight = rightSide[j];
        if (charLeft === chartRight) {
          sameChar = charLeft;
          break;
        }
      }
    }

    return acc + alphabet.indexOf(sameChar) + 1;
  }, 0);

  return sum;
}

/**
 *
 * @param {string} input
 */
export function solution2(input) {
  const groups = chunk(input.split("\n"), 3);

  const sum = groups.reduce((acc, curr) => {
    const [first, second, third] = curr;
    const sameChar = [...first].find((char) => {
      return (
        [...second].find((c) => c === char) &&
        [...third].find((c) => c === char)
      );
    });

    return acc + alphabet.indexOf(sameChar) + 1;
  }, 0);

  return sum
}
