/**
 * Youth Clubs Analytics – Record, monitor, analyse
 * Membership, sport/cultural impact, crime rates, mentorship & anti-social behaviour
 */

export interface TimeSeriesPoint {
  period: string;
  value: number;
  label?: string;
}

export interface MetricCard {
  id: string;
  title: string;
  value: number | string;
  unit: string;
  trend: "up" | "down" | "stable";
  trendLabel: string;
}

export interface ImpactSummary {
  area: string;
  summary: string;
  indicator: "positive" | "negative" | "neutral";
}
