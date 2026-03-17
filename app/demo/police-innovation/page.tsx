"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import type { PillarId } from "@/lib/police-innovation-types";
import {
  MOCK_KPIS,
  MOCK_INITIATIVES,
  MOCK_EVALUATIONS,
  MOCK_TREND_INCIDENTS,
  MOCK_TREND_COVERAGE,
  MOCK_PARTICIPATION_BY_PILLAR,
} from "@/lib/police-innovation-mock-data";

const PILLARS: { id: PillarId; name: string; shortName: string }[] = [
  { id: "patrols", name: "Police Patrols", shortName: "Patrols" },
  { id: "crime-eradication", name: "Crime Eradication", shortName: "Crime" },
  { id: "partnerships", name: "Community & Stakeholder Partnerships", shortName: "Partnerships" },
  { id: "school-intervention", name: "School Intervention Programmes", shortName: "Schools" },
  { id: "youth-sport-cultural", name: "Youth Sport & Cultural Initiatives", shortName: "Youth" },
];

const TREND_COLORS = { up: "text-emerald-600 dark:text-emerald-400", down: "text-rose-600 dark:text-rose-400", stable: "text-amber-600 dark:text-amber-400" };
const TREND_ICONS = { up: "↑", down: "↓", stable: "→" };

function BarChart({ data, label }: { data: { label: string; value: number; max: number }[]; label: string }) {
  return (
    <div className="space-y-2">
      <p className="text-sm font-medium text-gray-600 dark:text-gray-400">{label}</p>
      <div className="space-y-1.5">
        {data.map((d, i) => (
          <div key={i} className="flex items-center gap-2">
            <span className="w-24 text-xs text-gray-600 dark:text-gray-400 truncate">{d.label}</span>
            <div className="flex-1 h-5 bg-gray-100 dark:bg-gray-700 rounded overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-purple-500 to-blue-500 rounded"
                initial={{ width: 0 }}
                animate={{ width: `${Math.min(100, (d.value / d.max) * 100)}%` }}
                transition={{ duration: 0.8, delay: i * 0.05 }}
              />
            </div>
            <span className="text-xs font-medium text-gray-700 dark:text-gray-300 w-8">{d.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function TrendChart({ data, title, valueLabel }: { data: { period: string; value: number; label?: string }[]; title: string; valueLabel: string }) {
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
            transition={{ duration: 0.4, delay: i * 0.06 }}
          >
            <motion.div
              className="w-full min-h-[6px] rounded-t bg-gradient-to-t from-purple-600 to-blue-500"
              initial={{ height: 0 }}
              animate={{ height: `${Math.max((d.value / maxVal) * 100, 8)}%` }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
            />
            <span className="text-[10px] text-gray-500 dark:text-gray-400">{d.label || d.period.slice(-2)}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function DonutChart({ data, title }: { data: { label: string; value: number; color: string }[]; title: string }) {
  const total = data.reduce((s, d) => s + d.value, 0) || 1;
  const circumference = 2 * Math.PI * 14;
  let offset = 0;
  const segments = data.map((d) => {
    const pct = total > 0 ? d.value / total : 0;
    const length = pct * circumference;
    const seg = { ...d, length, offset: -offset };
    offset += length;
    return seg;
  });
  const strokeColors = ["#a855f7", "#3b82f6", "#10b981", "#f59e0b", "#9ca3af"];
  return (
    <div className="space-y-3">
      <p className="text-sm font-medium text-gray-600 dark:text-gray-400">{title}</p>
      <div className="flex items-center gap-4">
        <div className="relative w-28 h-28 shrink-0">
          <svg viewBox="0 0 36 36" className="w-full h-full -rotate-90">
            {segments.map((s, i) => (
              <motion.circle
                key={i}
                cx="18"
                cy="18"
                r="14"
                fill="none"
                stroke={strokeColors[i % strokeColors.length]}
                strokeWidth="4"
                strokeDasharray={`${s.length} ${circumference}`}
                strokeDashoffset={s.offset}
                initial={{ strokeDasharray: `0 ${circumference}` }}
                animate={{ strokeDasharray: `${s.length} ${circumference}` }}
                transition={{ duration: 0.6, delay: i * 0.05 }}
              />
            ))}
          </svg>
        </div>
        <ul className="flex-1 space-y-1 text-xs">
          {data.filter((d) => d.value > 0).map((d, i) => (
            <li key={i} className="flex items-center gap-2">
              <span className={`w-2 h-2 rounded-full ${d.color}`} />
              <span className="text-gray-600 dark:text-gray-400 truncate">{d.label}</span>
              <span className="font-medium text-gray-800 dark:text-gray-200 shrink-0">{d.value.toLocaleString()}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function EvaluationScorePanel({
  evaluations,
  activePillar,
}: {
  evaluations: typeof MOCK_EVALUATIONS;
  activePillar: PillarId | "overview";
}) {
  const shown = activePillar === "overview" ? evaluations : evaluations.filter((e) => e.pillarId === activePillar);

  return (
    <div className="space-y-4">
      <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300">Evaluation scores & recommendations</h3>
      <div className="space-y-4">
        {shown.map((e) => {
          const pillar = PILLARS.find((p) => p.id === e.pillarId);
          const pct = Math.round((e.score / e.maxScore) * 100);
          const grade = pct >= 85 ? "high" : pct >= 70 ? "medium" : "low";
          const ringColor = grade === "high" ? "text-emerald-500" : grade === "medium" ? "text-amber-500" : "text-rose-500";
          return (
            <motion.div
              key={e.pillarId}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              className="rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50/50 dark:bg-gray-800/50 p-4"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="font-medium text-gray-900 dark:text-white">{pillar?.name ?? e.pillarId}</span>
                <div className={`flex items-center justify-center w-10 h-10 rounded-full border-2 ${ringColor} border-current`}>
                  <span className="text-sm font-bold">{e.score}</span>
                </div>
              </div>
              <p className="text-xs text-gray-600 dark:text-gray-400 mb-3 leading-relaxed">{e.summary}</p>
              <div className="pt-2 border-t border-gray-200 dark:border-gray-700">
                <p className="text-[10px] font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-1.5">Recommendations</p>
                <ul className="space-y-1">
                  {e.recommendations.map((r, i) => (
                    <li key={i} className="text-xs text-gray-700 dark:text-gray-300 flex gap-1.5">
                      <span className="text-purple-500 shrink-0">•</span>
                      {r}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

export default function PoliceInnovationDemoPage() {
  const [activePillar, setActivePillar] = useState<PillarId | "overview">("overview");

  const kpis = activePillar === "overview" ? MOCK_KPIS : MOCK_KPIS.filter((k) => k.pillarId === activePillar);
  const initiatives = activePillar === "overview" ? MOCK_INITIATIVES : MOCK_INITIATIVES.filter((i) => i.pillarId === activePillar);

  const chartData = [
    { label: "Patrols", value: 94, max: 100 },
    { label: "Crime", value: 72, max: 100 },
    { label: "Partnerships", value: 84, max: 100 },
    { label: "Schools", value: 90, max: 100 },
    { label: "Youth", value: 88, max: 100 },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <header className="sticky top-0 z-40 border-b border-gray-200 dark:border-gray-700 bg-white/95 dark:bg-gray-900/95 backdrop-blur">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link
              href="/#projects"
              className="text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors flex items-center gap-1 text-sm"
            >
              ← Back to portfolio
            </Link>
            <span className="text-gray-300 dark:text-gray-600">|</span>
            <h1 className="text-lg font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Police Innovation – AI Monitor & Evaluate
            </h1>
          </div>
          <span className="text-xs text-gray-500 dark:text-gray-400 px-2 py-1 rounded bg-gray-100 dark:bg-gray-800">
            Demo / Pitch
          </span>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col lg:flex-row gap-6">
        <aside className="lg:w-56 shrink-0">
          <nav className="sticky top-24 space-y-0.5">
            <button
              onClick={() => setActivePillar("overview")}
              className={`w-full text-left px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                activePillar === "overview"
                  ? "bg-purple-100 dark:bg-purple-900/40 text-purple-700 dark:text-purple-300"
                  : "text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
              }`}
            >
              Overview
            </button>
            {PILLARS.map((p) => (
              <button
                key={p.id}
                onClick={() => setActivePillar(p.id)}
                className={`w-full text-left px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  activePillar === p.id
                    ? "bg-purple-100 dark:bg-purple-900/40 text-purple-700 dark:text-purple-300"
                    : "text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
                }`}
              >
                {p.shortName}
              </button>
            ))}
          </nav>
        </aside>

        <main className="flex-1 min-w-0 space-y-6">
          <motion.section
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4"
          >
            {kpis.map((kpi) => (
              <div
                key={kpi.id}
                className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-sm border border-gray-100 dark:border-gray-700"
              >
                <p className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-1">
                  {kpi.name}
                </p>
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl font-bold text-gray-900 dark:text-white">
                    {kpi.value}
                    {kpi.unit}
                  </span>
                  <span className={`text-xs font-medium ${TREND_COLORS[kpi.trend]}`}>
                    {TREND_ICONS[kpi.trend]} {kpi.trendLabel}
                  </span>
                </div>
              </div>
            ))}
          </motion.section>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <motion.section
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05 }}
              className="bg-white dark:bg-gray-800 rounded-xl p-5 shadow-sm border border-gray-100 dark:border-gray-700"
            >
              <BarChart data={chartData} label="Pillar performance index (Record → Monitor → Evaluate)" />
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.08 }}
              className="bg-white dark:bg-gray-800 rounded-xl p-5 shadow-sm border border-gray-100 dark:border-gray-700"
            >
              <DonutChart data={MOCK_PARTICIPATION_BY_PILLAR} title="Participation by pillar (YTD)" />
            </motion.section>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <motion.section
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-xl p-5 shadow-sm border border-gray-100 dark:border-gray-700"
            >
              <TrendChart data={MOCK_TREND_INCIDENTS} title="Reported incidents (last 6 months)" valueLabel="incidents" />
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.12 }}
              className="bg-white dark:bg-gray-800 rounded-xl p-5 shadow-sm border border-gray-100 dark:border-gray-700"
            >
              <TrendChart data={MOCK_TREND_COVERAGE} title="Patrol coverage % (last 6 months)" valueLabel="%" />
            </motion.section>
          </div>

          <motion.section
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="bg-white dark:bg-gray-800 rounded-xl p-5 shadow-sm border border-gray-100 dark:border-gray-700"
          >
            <EvaluationScorePanel evaluations={MOCK_EVALUATIONS} activePillar={activePillar} />
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.18 }}
            className="bg-white dark:bg-gray-800 rounded-xl p-5 shadow-sm border border-gray-100 dark:border-gray-700"
          >
            <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">Initiatives</h3>
            <ul className="space-y-2">
              {initiatives.map((init) => (
                <li
                  key={init.id}
                  className="flex items-start gap-2 text-sm border-b border-gray-100 dark:border-gray-700 pb-2 last:border-0 last:pb-0"
                >
                  <span
                    className={`shrink-0 w-2 h-2 rounded-full mt-1.5 ${
                      init.status === "active" ? "bg-emerald-500" : init.status === "completed" ? "bg-blue-500" : "bg-amber-500"
                    }`}
                  />
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white">{init.name}</p>
                    {init.outcomeSummary && (
                      <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">{init.outcomeSummary}</p>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </motion.section>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xs text-gray-500 dark:text-gray-400 border-t border-gray-200 dark:border-gray-700 pt-4"
          >
            This demo uses mock data. A full system would record patrols, crime initiatives, partnerships, school programmes, and youth initiatives; monitor KPIs in real time; and evaluate impact via AI-assisted analytics and reporting.
          </motion.p>
        </main>
      </div>
    </div>
  );
}
