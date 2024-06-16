import { EVALUATION_RATING, SCORE_THRESHOLD } from "./constants";

const {
  VERY_WEAK,
  WEAK,
  AVERAGE,
  STRONG,
  VERY_STRONG,
  TOO_NEGATIVE,
  NEGATIVE,
  BALANCED,
  POSITIVE,
  TOO_POSITIVE,
} = EVALUATION_RATING;

// TODO: Write tests for this

export const calculateRating = (totalTraitScore, category) => {
  const { veryWeak, weak, average, strong } = SCORE_THRESHOLD[category];
  if (totalTraitScore <= veryWeak) {
    return category === "Overall" ? TOO_NEGATIVE : VERY_WEAK;
  } else if (totalTraitScore <= weak) {
    return category === "Overall" ? NEGATIVE : WEAK;
  } else if (totalTraitScore <= average) {
    return category === "Overall" ? BALANCED : AVERAGE;
  } else if (totalTraitScore <= strong) {
    return category === "Overall" ? POSITIVE : STRONG;
  } else {
    return category === "Overall" ? TOO_POSITIVE : VERY_STRONG;
  }
};

export const getTotalTraitScore = (traits) => {
  let total = 0;
  let traitScores = Object.values(traits);

  traitScores.forEach((score) => {
    total += score;
  });

  return total;
};
