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
    return category === "OVERALL" ? TOO_NEGATIVE : VERY_WEAK;
  } else if (totalTraitScore <= weak) {
    return category === "OVERALL" ? NEGATIVE : WEAK;
  } else if (totalTraitScore <= average) {
    return category === "OVERALL" ? BALANCED : AVERAGE;
  } else if (totalTraitScore <= strong) {
    return category === "OVERALL" ? POSITIVE : STRONG;
  } else {
    return category === "OVERALL" ? TOO_POSITIVE : VERY_STRONG;
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
