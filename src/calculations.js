import { EVALUATION_RATING, SCORE_THRESHOLD, MAX_SCORES } from "./constants";

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

export const getPercentScore = (score, category) => {
  return score / MAX_SCORES[category];
};

export const setGraphData = (data) => {
  return Object.values(categories).reduce((acc, cur) => {
    const category = categoryKeyMap[cur].score;
    const score = getPercentScore(data[category], cur);
    return [...acc, { attribute: cur, score: score }];
  }, []);
};

export const getEvaluatedFormData = (data) => {
  const evaluatedData = Object.values(categories).reduce((acc, cur) => {
    const { score, rating } = getScoreAndRating(data, cur);
    const { rating: ratingKey, score: scoreKey } = categoryKeyMap[cur];

    return { ...acc, [ratingKey]: rating, [scoreKey]: score };
  }, {});

  evaluatedData["overallScore"] =
    evaluatedData["intelligenceScore"] +
    evaluatedData["physicalScore"] +
    evaluatedData["socialScore"] +
    evaluatedData["virtuousnessScore"];

  evaluatedData["overallRating"] = calculateRating(
    evaluatedData.overallScore,
    "Overall"
  );

  evaluatedData.graphData = setGraphData(evaluatedData);

  return evaluatedData;
};
