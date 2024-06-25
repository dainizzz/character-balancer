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
    total += parseInt(score);
  });

  return total;
};

const categories = {
  Intelligence: "Intelligence",
  "Physical Qualities": "Physical Qualities",
  "Social Skills": "Social Skills",
  Virtuousness: "Virtuousness",
};

export const categoryKeyMap = {
  [categories.Intelligence]: {
    rating: "intelligenceRating",
    score: "intelligenceScore",
  },
  [categories["Physical Qualities"]]: {
    rating: "physicalRating",
    score: "physicalScore",
  },
  [categories.Virtuousness]: {
    rating: "virtuousnessRating",
    score: "virtuousnessScore",
  },
  [categories["Social Skills"]]: {
    rating: "socialRating",
    score: "socialScore",
  },
};

export const getOverallScore = (categoryKeys, data) => {
  return categoryKeys.reduce((acc, cur) => {
    const score = getTotalTraitScore(data[cur]);
    acc += score;
  }, 0);
};

export const getScoreAndRating = (data, category) => {
  const score = getTotalTraitScore(data[category]);
  const rating = calculateRating(score, category);
  return { score, rating };
};

export const getEvaluatedFormData = (data) => {
  return Object.values(categories).reduce((acc, cur) => {
    const { score, rating } = getScoreAndRating(data, cur);
    const { rating: ratingKey, score: scoreKey } = categoryKeyMap[cur];

    return { ...acc, [ratingKey]: rating, [scoreKey]: score };
  }, {});
};

// TODO: Rewrite this w/ mapping 🤪
export const evaluateFormData = (data) => {
  const intelligenceScore = getTotalTraitScore(data["Intelligence"]);
  const physicalScore = getTotalTraitScore(data["Physical Qualities"]);
  const socialScore = getTotalTraitScore(data["Social Skills"]);
  const virtuousnessScore = getTotalTraitScore(data["Virtuousness"]);
  const overallScore =
    intelligenceScore + physicalScore + socialScore + virtuousnessScore;

  const intelligenceRating = calculateRating(intelligenceScore, "Intelligence");
  const physicalRating = calculateRating(physicalScore, "Physical Qualities");
  const socialRating = calculateRating(socialScore, "Social Skills");
  const virtuousnessRating = calculateRating(virtuousnessScore, "Virtuousness");
  const overallRating = calculateRating(overallScore, "Overall");

  const evaluation = {
    intelligenceScore,
    intelligenceRating,
    physicalScore,
    physicalRating,
    socialScore,
    socialRating,
    virtuousnessScore,
    virtuousnessRating,
    overallScore,
    overallRating,
  };

  return evaluation;
};
