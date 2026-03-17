import type { KpiRecord, InitiativeRecord, EvaluationSummary, TimeSeriesPoint } from "./police-innovation-types";

export const MOCK_KPIS: KpiRecord[] = [
  { id: "1", pillarId: "patrols", name: "Avg. patrol coverage", value: "94%", unit: "", trend: "up", trendLabel: "+3% vs last month" },
  { id: "2", pillarId: "patrols", name: "Response time (avg)", value: "8.2", unit: "min", trend: "down", trendLabel: "Improved" },
  { id: "3", pillarId: "patrols", name: "Hotspot visits (weekly)", value: 156, unit: "", trend: "up", trendLabel: "Target zones" },
  { id: "4", pillarId: "patrols", name: "Officer hours (monthly)", value: "2,840", unit: "hrs", trend: "stable", trendLabel: "On budget" },
  { id: "5", pillarId: "crime-eradication", name: "Reported incidents", value: 142, unit: "", trend: "down", trendLabel: "-12% vs prior quarter" },
  { id: "6", pillarId: "crime-eradication", name: "Initiatives active", value: 7, unit: "", trend: "stable", trendLabel: "On track" },
  { id: "7", pillarId: "crime-eradication", name: "Arrests (cleared)", value: 89, unit: "", trend: "up", trendLabel: "Clearance rate 63%" },
  { id: "8", pillarId: "crime-eradication", name: "Prevention ops", value: 23, unit: "", trend: "up", trendLabel: "This quarter" },
  { id: "9", pillarId: "partnerships", name: "Active partners", value: 24, unit: "", trend: "up", trendLabel: "+4 this quarter" },
  { id: "10", pillarId: "partnerships", name: "Engagement score", value: "4.2", unit: "/5", trend: "up", trendLabel: "Community survey" },
  { id: "11", pillarId: "partnerships", name: "Meetings held", value: 48, unit: "", trend: "up", trendLabel: "YTD" },
  { id: "12", pillarId: "partnerships", name: "MoUs signed", value: 8, unit: "", trend: "stable", trendLabel: "Formal agreements" },
  { id: "13", pillarId: "school-intervention", name: "Schools reached", value: 18, unit: "", trend: "up", trendLabel: "Target 20" },
  { id: "14", pillarId: "school-intervention", name: "Participant attendance", value: "87%", unit: "", trend: "stable", trendLabel: "YTD" },
  { id: "15", pillarId: "school-intervention", name: "Sessions delivered", value: 312, unit: "", trend: "up", trendLabel: "Curriculum on track" },
  { id: "16", pillarId: "school-intervention", name: "Referrals (at-risk)", value: 94, unit: "", trend: "down", trendLabel: "Early intervention" },
  { id: "17", pillarId: "youth-sport-cultural", name: "Youth participants", value: 1250, unit: "", trend: "up", trendLabel: "+18% YTD" },
  { id: "18", pillarId: "youth-sport-cultural", name: "Programmes running", value: 12, unit: "", trend: "up", trendLabel: "Sport & culture" },
  { id: "19", pillarId: "youth-sport-cultural", name: "Events (quarter)", value: 34, unit: "", trend: "up", trendLabel: "Leagues & festivals" },
  { id: "20", pillarId: "youth-sport-cultural", name: "Retention rate", value: "76%", unit: "", trend: "up", trendLabel: "Returning participants" },
];

export const MOCK_INITIATIVES: InitiativeRecord[] = [
  { id: "i1", pillarId: "patrols", name: "Hotspot visibility patrols", status: "active", startDate: "2025-01", outcomeSummary: "Coverage up in target zones" },
  { id: "i2", pillarId: "patrols", name: "Foot patrol expansion", status: "active", startDate: "2024-11", participants: 28, outcomeSummary: "12 beats, community feedback positive" },
  { id: "i3", pillarId: "patrols", name: "Night shift surge", status: "completed", startDate: "2024-10", endDate: "2025-01", outcomeSummary: "Incidents down 8% in trial area" },
  { id: "i4", pillarId: "crime-eradication", name: "Neighbourhood watch rollout", status: "active", startDate: "2025-02", outcomeSummary: "12 areas engaged" },
  { id: "i5", pillarId: "crime-eradication", name: "Drug awareness campaign", status: "active", startDate: "2024-12", participants: 0, outcomeSummary: "Schools + community, 6 events" },
  { id: "i6", pillarId: "crime-eradication", name: "Safe corridors initiative", status: "active", startDate: "2025-01", outcomeSummary: "Lighting + patrols on 4 routes" },
  { id: "i7", pillarId: "partnerships", name: "Business safety forum", status: "active", startDate: "2024-11", outcomeSummary: "Monthly meetings, 15 members" },
  { id: "i8", pillarId: "partnerships", name: "Faith leaders network", status: "active", startDate: "2024-09", outcomeSummary: "Quarterly summits, 8 organisations" },
  { id: "i9", pillarId: "partnerships", name: "NGO coordination hub", status: "planned", startDate: "2025-04", outcomeSummary: "Pilot in 2 districts" },
  { id: "i10", pillarId: "school-intervention", name: "Safe schools programme", status: "active", startDate: "2024-09", participants: 420, outcomeSummary: "18 schools, 87% attendance" },
  { id: "i11", pillarId: "school-intervention", name: "Mentorship scheme", status: "active", startDate: "2025-01", participants: 65, outcomeSummary: "At-risk youth, 1:1 matches" },
  { id: "i12", pillarId: "school-intervention", name: "Conflict resolution workshops", status: "completed", startDate: "2024-08", endDate: "2024-12", participants: 280, outcomeSummary: "Pilot in 6 schools" },
  { id: "i13", pillarId: "youth-sport-cultural", name: "Community league & arts", status: "active", startDate: "2025-01", participants: 1250, outcomeSummary: "12 programmes, 6 venues" },
  { id: "i14", pillarId: "youth-sport-cultural", name: "Summer sports academy", status: "planned", startDate: "2025-07", outcomeSummary: "Football, netball, athletics" },
  { id: "i15", pillarId: "youth-sport-cultural", name: "Heritage & culture days", status: "active", startDate: "2024-10", participants: 420, outcomeSummary: "4 events, 3 venues" },
];

export const MOCK_EVALUATIONS: EvaluationSummary[] = [
  {
    pillarId: "patrols",
    score: 87,
    maxScore: 100,
    summary: "Patrol coverage and response times have improved. Hotspot visibility and foot patrol expansion show strong engagement. Recommend sustaining night surge lessons in other areas.",
    recommendations: ["Extend night surge model to Zone B", "Add mobile app for real-time patrol logging", "Review beat allocation using latest crime heat maps"],
  },
  {
    pillarId: "crime-eradication",
    score: 72,
    maxScore: 100,
    summary: "Reported incidents are down and clearance rate is up. Neighbourhood watch and safe corridors are scaling well. Drug awareness and prevention ops need more measurable targets.",
    recommendations: ["Set quarterly targets for prevention ops", "Link drug awareness to school intervention data", "Pilot predictive hotspot alerts with patrols"],
  },
  {
    pillarId: "partnerships",
    score: 84,
    maxScore: 100,
    summary: "Partner count and engagement scores are rising. Business and faith networks are active. Formalise NGO hub scope and success metrics before launch.",
    recommendations: ["Define NGO hub KPIs and reporting", "Survey partners for satisfaction (bi-annual)", "Document and share partnership playbook"],
  },
  {
    pillarId: "school-intervention",
    score: 90,
    maxScore: 100,
    summary: "Schools reached and attendance are on track. Mentorship and conflict resolution show positive early outcomes. Align referrals with youth sport for end-to-end pathway.",
    recommendations: ["Integrate referral data with youth programmes", "Target 22 schools by next FY", "Add teacher feedback loop to curriculum"],
  },
  {
    pillarId: "youth-sport-cultural",
    score: 88,
    maxScore: 100,
    summary: "Youth participation and retention are strong. Community league and heritage events are well received. Summer academy planning is on schedule.",
    recommendations: ["Measure diversion/offending outcomes for participants", "Expand venues for summer academy", "Capture stories for comms and funding"],
  },
];

export const MOCK_TREND_INCIDENTS: TimeSeriesPoint[] = [
  { period: "2024-10", value: 198, label: "Oct" },
  { period: "2024-11", value: 182, label: "Nov" },
  { period: "2024-12", value: 165, label: "Dec" },
  { period: "2025-01", value: 158, label: "Jan" },
  { period: "2025-02", value: 148, label: "Feb" },
  { period: "2025-03", value: 142, label: "Mar" },
];

export const MOCK_TREND_COVERAGE: TimeSeriesPoint[] = [
  { period: "2024-10", value: 82, label: "Oct" },
  { period: "2024-11", value: 85, label: "Nov" },
  { period: "2024-12", value: 88, label: "Dec" },
  { period: "2025-01", value: 91, label: "Jan" },
  { period: "2025-02", value: 93, label: "Feb" },
  { period: "2025-03", value: 94, label: "Mar" },
];

export const MOCK_PARTICIPATION_BY_PILLAR = [
  { label: "School intervention", value: 765, color: "bg-purple-500" },
  { label: "Youth sport & culture", value: 1670, color: "bg-blue-500" },
  { label: "Partnerships (attendees)", value: 320, color: "bg-emerald-500" },
  { label: "Crime prevention (reach)", value: 2100, color: "bg-amber-500" },
  { label: "Patrols (contacts)", value: 0, color: "bg-gray-400" },
];
