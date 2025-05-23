import { ForecastDay } from "../types/forecast";

// heavy use of AI to generate the rulesets

// Abstract ruleset types
export type Rule = {
  property: keyof ForecastDay;
  score: (value: number) => number;
};

export type RuleSet = {
  name: string;
  maxScore: number;
  rules: Rule[];
};

// Generic scoring function
export const scoreByRuleset = (day: ForecastDay, ruleset: RuleSet): number => {
  const { rules, maxScore } = ruleset;
  const score = rules.reduce((sum, rule) => {
    const value = day[rule.property] as number;
    return sum + rule.score(value);
  }, 0);
  return Math.round((score / maxScore) * 100);
};

// Skiing ruleset (max raw score: 80)
export const skiingRules: RuleSet = {
  name: "skiing",
  maxScore: 80,
  rules: [
    {
      property: "snowfall_sum",
      score: (v) => Math.min(v * 10, 30),
    },
    {
      property: "temperature_2m_max",
      score: (v) => (v < 0 ? 20 : v < 5 ? 10 : 0),
    },
    {
      property: "wind_speed_10m_max",
      score: (v) => (v < 20 ? 10 : 0),
    },
    {
      property: "precipitation_probability_max",
      score: (v) => Math.max(10 - v / 10, 0),
    },
    {
      property: "sunshine_duration",
      score: (v) => Math.min(v / 3600, 10),
    },
  ],
};

// Surfing ruleset (max raw score: 60)
export const surfingRules: RuleSet = {
  name: "surfing",
  maxScore: 60,
  rules: [
    {
      property: "wind_speed_10m_max",
      score: (v) => (v >= 15 && v <= 30 ? 20 : v > 10 && v < 40 ? 10 : 0),
    },
    {
      property: "temperature_2m_max",
      score: (v) => (v >= 15 && v <= 28 ? 20 : 0),
    },
    {
      property: "precipitation_probability_max",
      score: (v) => Math.max(10 - v / 10, 0),
    },
    {
      property: "sunshine_duration",
      score: (v) => Math.min(v / 3600, 10),
    },
  ],
};

// Outdoor sightseeing ruleset (max raw score: 70)
export const outdoorSightseeingRules: RuleSet = {
  name: "outdoor_sightseeing",
  maxScore: 70,
  rules: [
    {
      property: "temperature_2m_max",
      score: (v) => (v >= 15 && v <= 25 ? 20 : 0),
    },
    {
      property: "precipitation_probability_max",
      score: (v) => Math.max(20 - v / 5, 0),
    },
    {
      property: "wind_speed_10m_max",
      score: (v) => (v < 20 ? 10 : 0),
    },
    {
      property: "uv_index_max",
      score: (v) => Math.max(10 - v, 0),
    },
    {
      property: "sunshine_duration",
      score: (v) => Math.min(v / 3600, 10),
    },
  ],
};

// Indoor sightseeing ruleset (max raw score: 50)
export const indoorSightseeingRules: RuleSet = {
  name: "indoor_sightseeing",
  maxScore: 50,
  rules: [
    {
      property: "precipitation_probability_max",
      score: (v) => Math.min(v / 5, 20),
    },
    {
      property: "temperature_2m_max",
      score: (v) => (v < 10 ? 10 : 0),
    },
    {
      property: "wind_speed_10m_max",
      score: (v) => (v > 25 ? 10 : 0),
    },
    {
      property: "sunshine_duration",
      score: (v) => Math.max(10 - v / 3600, 0),
    },
  ],
};

// Map of activity to ruleset can expand to include more activities
export const ActivityRuleMap = new Map<string, RuleSet>([
  ["Skiing", skiingRules],
  ["Surfing", surfingRules],
  ["Outdoor Sightseeing", outdoorSightseeingRules],
  ["Indoor Sightseeing", indoorSightseeingRules],
]);

export const getActivityScores = (day: ForecastDay) => {
  const scores = Array.from(ActivityRuleMap.entries()).map(
    ([activity, ruleset]) => ({
      activity,
      score: scoreByRuleset(day, ruleset),
    })
  );
  console.log("scores", scores);
  return scores;
};
