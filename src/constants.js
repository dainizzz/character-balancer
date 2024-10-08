export const CATEGORIES = [
  {
    id: "INTELLIGENCE",
    displayName: "Intelligence",
    traits: [
      { leftTrait: "unitelligent", rightTrait: "smart" },
      { leftTrait: "ignorant", rightTrait: "learned" },
      { leftTrait: "helpless", rightTrait: "street-smart" },
      { leftTrait: "dull", rightTrait: "witty" },
      { leftTrait: "forgetfull", rightTrait: "remembering" },
      { leftTrait: "irrational", rightTrait: "logical" },
    ],
  },
  {
    id: "PHYSICAL_QUALITIES",
    displayName: "Physical Qualities",
    traits: [
      { leftTrait: "ugly", rightTrait: "attractive" },
      { leftTrait: "weak", rightTrait: "strong" },
      { leftTrait: "slow", rightTrait: "fast" },
      { leftTrait: "clumsy", rightTrait: "agile" },
      { leftTrait: "unfit", rightTrait: "enduring" },
    ],
  },
  {
    id: "VIRTUOUSNESS",
    displayName: "Virtuousness",
    traits: [
      { leftTrait: "unfaithful", rightTrait: "loyal" },
      { leftTrait: "deceiving", rightTrait: "honest" },
      { leftTrait: "vindictive", rightTrait: "forgiving" },
      { leftTrait: "arrogant", rightTrait: "humble" },
      { leftTrait: "selfish", rightTrait: "altruistic" },
      { leftTrait: "cowardly", rightTrait: "brave" },
      { leftTrait: "surrendering", rightTrait: "persistent" },
      { leftTrait: "cruel", rightTrait: "merciful" },
      { leftTrait: "submissive", rightTrait: "obstinate" },
      { leftTrait: "immoral", rightTrait: "moral" },
      { leftTrait: "lazy", rightTrait: "hard-working" },
    ],
  },
  {
    id: "SOCIAL_SKILLS",
    displayName: "Social Skills",
    traits: [
      { leftTrait: "insecure", rightTrait: "confident" },
      { leftTrait: "mean", rightTrait: "kind" },
      { leftTrait: "negligent", rightTrait: "caring" },
      { leftTrait: "reserved", rightTrait: "talkative" },
      { leftTrait: "reclusive", rightTrait: "outgoing" },
      { leftTrait: "vile", rightTrait: "charismatic" },
      { leftTrait: "aggressive", rightTrait: "calm" },
      { leftTrait: "violent", rightTrait: "gentle" },
      { leftTrait: "short-tempered", rightTrait: "patient" },
      { leftTrait: "follower", rightTrait: "leader" },
      { leftTrait: "suspicious", rightTrait: "confiding" },
      { leftTrait: "disapproving", rightTrait: "open-minded" },
      { leftTrait: "rude", rightTrait: "polite" },
      { leftTrait: "exploitative", rightTrait: "appreciative" },
    ],
  },
];

export const EVALUATION_RATING = {
  VERY_WEAK: "very weak",
  WEAK: "weak",
  AVERAGE: "average",
  STRONG: "strong",
  VERY_STRONG: "very strong",
  TOO_NEGATIVE: "too negative",
  NEGATIVE: "negative",
  BALANCED: "balanced",
  POSITIVE: "positive",
  TOO_POSITIVE: "too positive",
};

export const SCORE_THRESHOLD = {
  Intelligence: { veryWeak: 9, weak: 14, average: 20, strong: 25 },
  "Physical Qualities": { veryWeak: 8, weak: 12, average: 17, strong: 21 },
  Virtuousness: { veryWeak: 17, weak: 28, average: 39, strong: 48 },
  "Social Skills": { veryWeak: 23, weak: 34, average: 48, strong: 59 },
  Overall: { veryWeak: 60, weak: 84, average: 115, strong: 139 },
};

export const MAX_SCORES = {
  Intelligence: 30,
  "Physical Qualities": 25,
  "Social Skills": 70,
  Virtuousness: 55,
  Overall: 180,
};
