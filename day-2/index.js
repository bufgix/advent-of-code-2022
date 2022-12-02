const InputMapOpponent = {
  A: "ROCK",
  B: "PAPER",
  C: "SCISSORS",
};

const InputMapPlayer = {
  X: "ROCK",
  Y: "PAPER",
  Z: "SCISSORS",
};

const InputMapGameSatatus = {
  X: "LOSE",
  Y: "DRAW",
  Z: "WIN",
};

const RPSBeat = {
  ROCK: "SCISSORS",
  PAPER: "ROCK",
  SCISSORS: "PAPER",
};

const RPSPoints = {
  ROCK: 1,
  PAPER: 2,
  SCISSORS: 3,
};

export function solution1(input) {
  const rounds = input.split("\n").map((line) => {
    const [opponent, player] = line.split(" ");
    return [InputMapOpponent[opponent], InputMapPlayer[player]];
  });

  const score = rounds.reduce((score, [opponent, player]) => {
    if (RPSBeat[opponent] === player) {
      // opponent wins
      return score + RPSPoints[player];
    } else if (RPSBeat[player] === opponent) {
      // player wins
      return score + RPSPoints[player] + 6;
    } else {
      // draw
      return score + RPSPoints[player] + 3;
    }
  }, 0);
  return score;
}

export function solution2(input) {
  const rounds = input.split("\n").map((line) => {
    const [opponent, status] = line.split(" ");
    return [InputMapOpponent[opponent], InputMapGameSatatus[status]];
  });

  const RPSLoose = Object.fromEntries(
    Object.entries(RPSBeat).map(([k, v]) => [v, k])
  );

  const score = rounds.reduce((score, [opponent, status]) => {
    if (status === "WIN") {
      return score + 6 + RPSPoints[RPSLoose[opponent]];
    } else if (status === "LOSE") {
      return score + RPSPoints[RPSBeat[opponent]];
    } else {
      return score + 3 + RPSPoints[opponent];
    }
  }, 0);

  return score;
}
