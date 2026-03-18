import type { TimeSeriesPoint, MetricCard } from "./youth-clubs-analytics-types";

/** Membership: record & monitor increase/decrease */
export const MEMBERSHIP_TREND: TimeSeriesPoint[] = [
  { period: "2024-01", value: 420, label: "Jan" },
  { period: "2024-04", value: 485, label: "Apr" },
  { period: "2024-07", value: 532, label: "Jul" },
  { period: "2024-10", value: 598, label: "Oct" },
  { period: "2025-01", value: 647, label: "Jan" },
  { period: "2025-04", value: 712, label: "Apr" },
];

export const MEMBERSHIP_KPIS: MetricCard[] = [
  { id: "m1", title: "Total membership", value: 712, unit: "", trend: "up", trendLabel: "+15% YoY" },
  { id: "m2", title: "New members (this quarter)", value: 65, unit: "", trend: "up", trendLabel: "+12 vs prior quarter" },
  { id: "m3", title: "Retention rate", value: "84%", unit: "", trend: "up", trendLabel: "YTD" },
];

/** Sport & cultural activities: impact */
export const SPORT_CULTURAL_PARTICIPATION: TimeSeriesPoint[] = [
  { period: "2024-01", value: 280, label: "Jan" },
  { period: "2024-04", value: 320, label: "Apr" },
  { period: "2024-07", value: 410, label: "Jul" },
  { period: "2024-10", value: 465, label: "Oct" },
  { period: "2025-01", value: 518, label: "Jan" },
  { period: "2025-04", value: 572, label: "Apr" },
];

export const SPORT_CULTURAL_KPIS: MetricCard[] = [
  { id: "s1", title: "Active in sport/cultural", value: 572, unit: "members", trend: "up", trendLabel: "80% of membership" },
  { id: "s2", title: "Programmes running", value: 18, unit: "", trend: "up", trendLabel: "Sport + culture" },
  { id: "s3", title: "Avg. sessions per member", value: "4.2", unit: "/month", trend: "up", trendLabel: "Engagement up" },
];

/** Crime rates: increase/decrease in areas served */
export const CRIME_RATE_TREND: TimeSeriesPoint[] = [
  { period: "2024-01", value: 142, label: "Jan" },
  { period: "2024-04", value: 128, label: "Apr" },
  { period: "2024-07", value: 118, label: "Jul" },
  { period: "2024-10", value: 105, label: "Oct" },
  { period: "2025-01", value: 98, label: "Jan" },
  { period: "2025-04", value: 89, label: "Apr" },
];

export const CRIME_KPIS: MetricCard[] = [
  { id: "c1", title: "Reported incidents (club areas)", value: 89, unit: "", trend: "down", trendLabel: "-15% vs prior quarter" },
  { id: "c2", title: "Youth-related incidents", value: 24, unit: "", trend: "down", trendLabel: "-22% YoY" },
  { id: "c3", title: "Trend vs baseline", value: "Down 37%", unit: "", trend: "down", trendLabel: "Since programme start" },
];

/** Mentorship impact on anti-social behaviour */
export const MENTORSHIP_ASB_TREND: TimeSeriesPoint[] = [
  { period: "2024-01", value: 38, label: "Jan" },
  { period: "2024-04", value: 34, label: "Apr" },
  { period: "2024-07", value: 28, label: "Jul" },
  { period: "2024-10", value: 22, label: "Oct" },
  { period: "2025-01", value: 18, label: "Jan" },
  { period: "2025-04", value: 14, label: "Apr" },
];

export const MENTORSHIP_KPIS: MetricCard[] = [
  { id: "mt1", title: "Youth in mentorship", value: 94, unit: "", trend: "up", trendLabel: "Active matches" },
  { id: "mt2", title: "ASB incidents (mentored)", value: 14, unit: "", trend: "down", trendLabel: "-63% vs baseline" },
  { id: "mt3", title: "Positive outcome rate", value: "78%", unit: "", trend: "up", trendLabel: "No re-referral 12mo" },
];
