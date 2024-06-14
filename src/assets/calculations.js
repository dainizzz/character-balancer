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

export const calculateRating = (total, category) => {
  const [veryWeak, weak, average, strong] = SCORE_THRESHOLD[category];
  if (total <= veryWeak) {
    return category === "OVERALL" ? TOO_NEGATIVE : VERY_WEAK;
  } else if (total <= weak) {
    return category === "OVERALL" ? NEGATIVE : WEAK;
  } else if (total <= average) {
    return category === "OVERALL" ? BALANCED : AVERAGE;
  } else if (total <= strong) {
    return category === "OVERALL" ? POSITIVE : STRONG;
  } else {
    return category === "OVERALL" ? TOO_POSITIVE : VERY_STRONG;
  }
};
