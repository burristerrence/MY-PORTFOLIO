/**
 * Police Innovation – AI monitoring & evaluation
 * Data model and evaluation framework types
 */

export type PillarId =
  | "patrols"
  | "crime-eradication"
  | "partnerships"
  | "school-intervention"
  | "youth-sport-cultural";

export interface PillarMeta {
  id: PillarId;
  name: string;
  description: string;
  icon: string;
}

export interface KpiRecord {
  id: string;
  pillarId: PillarId;
  name: string;
  value: number | string;
  unit: string;
  trend: "up" | "down" | "stable";
  trendLabel: string;
  target?: number;
}

export interface TimeSeriesPoint {
  period: string;
  value: number;
  label?: string;
}

export interface InitiativeRecord {
  id: string;
  pillarId: PillarId;
  name: string;
  status: "active" | "completed" | "planned";
  startDate: string;
  endDate?: string;
  participants?: number;
  outcomeSummary?: string;
}

export interface EvaluationSummary {
  pillarId: PillarId;
  score: number;
  maxScore: number;
  summary: string;
  recommendations: string[];
}
