"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { MetricCard, TimeSeriesPoint } from "@/lib/youth-clubs-analytics-types";
import {
  MEMBERSHIP_TREND,
  MEMBERSHIP_KPIS,
  SPORT_CULTURAL_PARTICIPATION,
  SPORT_CULTURAL_KPIS,
  CRIME_RATE_TREND,
  CRIME_KPIS,
  MENTORSHIP_ASB_TREND,
  MENTORSHIP_KPIS,
} from "@/lib/youth-clubs-analytics-data";

const TREND_COLORS = {
  up: "text-emerald-600 dark:text-emerald-400",
  down: "text-rose-600 dark:text-rose-400",
  stable: "text-amber-600 dark:text-amber-400",
};
const TREND_ICONS = { up: "↑", down: "↓", stable: "→" };

function TrendChart({
  data,
  title,
  valueLabel,
}: {
  data: TimeSeriesPoint[];
  title: string;
  valueLabel: string;
}) {
  const maxVal = Math.max(...data.map((d) => d.value));
  return (
    <div className="space-y-3">
      <div className="flex justify-between items-baseline">
        <p className="text-sm font-medium text-gray-600 dark:text-gray-400">{title}</p>
        <span className="text-xs text-gray-500">{valueLabel}</span>
      </div>
      <div className="flex items-end gap-1 h-24">
        {data.map((d, i) => (
          <motion.div
            key={d.period}
            className="flex-1 h-full flex flex-col items-center justify-end gap-0.5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: i * 0.05 }}
          >
            <motion.div
              className="w-full min-h-[6px] rounded-t bg-gradient-to-t from-purple-600 to-blue-500"
              initial={{ height: 0 }}
              animate={{ height: `${Math.max((d.value / maxVal) * 100, 8)}%` }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
            />
            <span className="text-[10px] text-gray-500 dark:text-gray-400">{d.label || d.period.slice(-2)}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function KpiCards({ cards }: { cards: MetricCard[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
      {cards.map((kpi) => (
        <div
          key={kpi.id}
          className="bg-white dark:bg-gray-800 rounded-lg p-3 border border-gray-100 dark:border-gray-700"
        >
          <p className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-0.5">
            {kpi.title}
          </p>
          <div className="flex items-baseline gap-2">
            <span className="text-xl font-bold text-gray-900 dark:text-white">
              {kpi.value}
              {kpi.unit}
            </span>
            <span className={`text-xs font-medium ${TREND_COLORS[kpi.trend]}`}>
              {TREND_ICONS[kpi.trend]} {kpi.trendLabel}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}

function Section({
  id,
  title,
  description,
  kpis,
  trendData,
  trendTitle,
  trendValueLabel,
}: {
  id: string;
  title: string;
  description: string;
  kpis: MetricCard[];
  trendData: TimeSeriesPoint[];
  trendTitle: string;
  trendValueLabel: string;
}) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white dark:bg-gray-800 rounded-xl p-4 sm:p-5 border border-gray-200 dark:border-gray-700 space-y-4"
    >
      <div>
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white">{title}</h2>
        <p className="text-sm text-gray-600 dark:text-gray-400 mt-0.5">{description}</p>
      </div>
      <KpiCards cards={kpis} />
      <div className="pt-2 border-t border-gray-100 dark:border-gray-700">
        <TrendChart data={trendData} title={trendTitle} valueLabel={trendValueLabel} />
      </div>
    </motion.section>
  );
}

export default function YouthClubsDemoPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <header className="sticky top-0 z-40 border-b border-gray-200 dark:border-gray-700 bg-white/95 dark:bg-gray-900/95 backdrop-blur">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link
              href="/#projects"
              className="text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors flex items-center gap-1 text-sm"
            >
              ← Back to portfolio
            </Link>
            <span className="text-gray-300 dark:text-gray-600">|</span>
            <h1 className="text-lg font-bold text-gray-900 dark:text-white">Youth Clubs Analytics</h1>
          </div>
          <span className="text-xs text-gray-500 dark:text-gray-400 px-2 py-1 rounded bg-gray-100 dark:bg-gray-800">
            Record · Monitor · Analyse
          </span>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-sm text-gray-600 dark:text-gray-400"
        >
          Track membership trends, impact of sport and cultural activities, crime rates in club areas, and mentorship
          impact on anti-social behaviour.
        </motion.p>

        <Section
          id="membership"
          title="Membership"
          description="Record and monitor increase/decrease in membership over time."
          kpis={MEMBERSHIP_KPIS}
          trendData={MEMBERSHIP_TREND}
          trendTitle="Total membership (last 18 months)"
          trendValueLabel="members"
        />

        <Section
          id="sport-cultural"
          title="Sport & cultural activities"
          description="Impact of sport and cultural programmes on participation and engagement."
          kpis={SPORT_CULTURAL_KPIS}
          trendData={SPORT_CULTURAL_PARTICIPATION}
          trendTitle="Members active in sport/cultural programmes"
          trendValueLabel="members"
        />

        <Section
          id="crime"
          title="Crime rates"
          description="Increase/decrease in reported incidents in areas served by youth clubs."
          kpis={CRIME_KPIS}
          trendData={CRIME_RATE_TREND}
          trendTitle="Reported incidents (club catchment areas)"
          trendValueLabel="incidents"
        />

        <Section
          id="mentorship"
          title="Mentorship & anti-social behaviour"
          description="Mentorship impact on anti-social behaviour and positive outcomes."
          kpis={MENTORSHIP_KPIS}
          trendData={MENTORSHIP_ASB_TREND}
          trendTitle="ASB incidents (youth, programme areas)"
          trendValueLabel="incidents"
        />

        <p className="text-xs text-gray-500 dark:text-gray-400 border-t border-gray-200 dark:border-gray-700 pt-4">
          Demo data. A full platform would record, monitor and analyse membership, programme impact, crime rates and
          mentorship outcomes in real time.
        </p>
      </div>
    </div>
  );
}
