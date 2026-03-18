"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import type { Deliverable, DeliverableStatus } from "@/lib/christmas-on-the-hill-types";
import { CHRISTMAS_ON_THE_HILL } from "@/lib/christmas-on-the-hill-data";

const STATUS_LABELS: Record<DeliverableStatus, string> = {
  "not-started": "Not started",
  "in-progress": "In progress",
  review: "In review",
  completed: "Completed",
};

const STATUS_STYLES: Record<DeliverableStatus, string> = {
  "not-started": "bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300",
  "in-progress": "bg-amber-100 text-amber-800 dark:bg-amber-900/50 dark:text-amber-300",
  review: "bg-blue-100 text-blue-800 dark:bg-blue-900/50 dark:text-blue-300",
  completed: "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/50 dark:text-emerald-300",
};

function formatDate(dateStr: string) {
  const d = new Date(dateStr + "T12:00:00");
  return d.toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" });
}

function formatEventDate(dateStr: string) {
  const d = new Date(dateStr + "T12:00:00");
  return d.toLocaleDateString("en-GB", { weekday: "long", day: "numeric", month: "long", year: "numeric" });
}

function TimelineBar({ deliverable }: { deliverable: Deliverable }) {
  const start = new Date(deliverable.startDate).getTime();
  const end = new Date(deliverable.dueDate).getTime();
  const projectStart = new Date("2025-09-01").getTime();
  const projectEnd = new Date("2025-12-14").getTime();
  const total = projectEnd - projectStart;
  const left = ((start - projectStart) / total) * 100;
  const width = ((end - start) / total) * 100;

  return (
    <div className="flex items-center gap-3">
      <span className="w-40 text-xs text-gray-600 dark:text-gray-400 truncate shrink-0">{deliverable.title}</span>
      <div className="flex-1 h-6 bg-gray-100 dark:bg-gray-700 rounded overflow-hidden relative min-w-0">
        <motion.div
          className={`absolute top-0 bottom-0 rounded ${
            deliverable.status === "completed"
              ? "bg-emerald-500"
              : deliverable.status === "in-progress"
                ? "bg-amber-500"
                : "bg-gray-400 dark:bg-gray-500"
          }`}
          style={{ left: `${left}%` }}
          initial={{ width: 0 }}
          animate={{ width: `${width}%` }}
          transition={{ duration: 0.5 }}
        />
      </div>
      <span className="text-[10px] text-gray-500 dark:text-gray-400 shrink-0 tabular-nums">
        {formatDate(deliverable.startDate)} – {formatDate(deliverable.dueDate)}
      </span>
    </div>
  );
}

function DeliverableCard({
  deliverable,
  isExpanded,
  onToggle,
}: {
  deliverable: Deliverable;
  isExpanded: boolean;
  onToggle: () => void;
}) {
  return (
    <motion.div
      layout
      className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden"
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <button
        type="button"
        onClick={onToggle}
        className="w-full px-4 py-4 sm:px-5 sm:py-4 text-left flex flex-wrap items-center gap-2 sm:gap-4 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors"
      >
        <span className="font-medium text-gray-900 dark:text-white flex-1 min-w-0">{deliverable.title}</span>
        <span className={`text-xs font-medium px-2 py-0.5 rounded-full shrink-0 ${STATUS_STYLES[deliverable.status]}`}>
          {STATUS_LABELS[deliverable.status]}
        </span>
        <span className="text-xs text-gray-500 dark:text-gray-400 shrink-0 tabular-nums">
          {formatDate(deliverable.startDate)} → {formatDate(deliverable.dueDate)}
        </span>
        <svg
          className={`w-5 h-5 text-gray-400 shrink-0 transition-transform ${isExpanded ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="border-t border-gray-100 dark:border-gray-700"
          >
            <div className="px-4 py-3 sm:px-5 bg-gray-50/50 dark:bg-gray-800/50">
              {deliverable.description && (
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">{deliverable.description}</p>
              )}
              {deliverable.subTasks && deliverable.subTasks.length > 0 && (
                <ul className="space-y-2">
                  {deliverable.subTasks.map((task) => (
                    <li
                      key={task.id}
                      className="flex flex-wrap items-center gap-2 text-sm py-1.5 border-b border-gray-100 dark:border-gray-700 last:border-0"
                    >
                      <span
                        className={`w-2 h-2 rounded-full shrink-0 ${
                          task.status === "completed"
                            ? "bg-emerald-500"
                            : task.status === "in-progress"
                              ? "bg-amber-500"
                              : "bg-gray-300 dark:bg-gray-600"
                        }`}
                      />
                      <span className="text-gray-800 dark:text-gray-200 flex-1 min-w-0">{task.title}</span>
                      <span className="text-xs text-gray-500 tabular-nums">Due {formatDate(task.dueDate)}</span>
                      <span className={`text-[10px] font-medium px-1.5 py-0.5 rounded ${STATUS_STYLES[task.status]}`}>
                        {STATUS_LABELS[task.status]}
                      </span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function TaskManagementDemoPage() {
  const [expandedId, setExpandedId] = useState<string | null>(CHRISTMAS_ON_THE_HILL.deliverables[0]?.id ?? null);

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
            <h1 className="text-lg font-bold text-gray-900 dark:text-white">Christmas on the Hill</h1>
          </div>
          <span className="text-xs text-gray-500 dark:text-gray-400 px-2 py-1 rounded bg-gray-100 dark:bg-gray-800">
            Task Management
          </span>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">
        <motion.section
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white dark:bg-gray-800 rounded-xl p-4 sm:p-5 border border-gray-200 dark:border-gray-700"
        >
          <div className="flex flex-wrap items-center gap-4">
            <div>
              <p className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide">Event date</p>
              <p className="text-lg font-semibold text-gray-900 dark:text-white">
                {formatEventDate(CHRISTMAS_ON_THE_HILL.eventDate)}
              </p>
            </div>
            <div className="flex gap-2 flex-wrap">
              {(["completed", "in-progress", "not-started"] as const).map((status) => {
                const count = CHRISTMAS_ON_THE_HILL.deliverables.filter((d) => d.status === status).length;
                if (count === 0) return null;
                return (
                  <span
                    key={status}
                    className={`text-xs font-medium px-2 py-1 rounded ${STATUS_STYLES[status]}`}
                  >
                    {STATUS_LABELS[status]}: {count}
                  </span>
                );
              })}
            </div>
          </div>
        </motion.section>

        <section>
          <h2 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">Timeline overview</h2>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="bg-white dark:bg-gray-800 rounded-xl p-4 sm:p-5 border border-gray-200 dark:border-gray-700 space-y-2"
          >
            <div className="text-[10px] text-gray-400 mb-1 flex justify-between">
              <span>Sep 2025</span>
              <span>Oct</span>
              <span>Nov</span>
              <span>Dec 2025</span>
            </div>
            {CHRISTMAS_ON_THE_HILL.deliverables.map((d) => (
              <TimelineBar key={d.id} deliverable={d} />
            ))}
          </motion.div>
        </section>

        <section>
          <h2 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">Deliverables</h2>
          <div className="space-y-3">
            {CHRISTMAS_ON_THE_HILL.deliverables.map((deliverable) => (
              <DeliverableCard
                key={deliverable.id}
                deliverable={deliverable}
                isExpanded={expandedId === deliverable.id}
                onToggle={() => setExpandedId(expandedId === deliverable.id ? null : deliverable.id)}
              />
            ))}
          </div>
        </section>

        <p className="text-xs text-gray-500 dark:text-gray-400 border-t border-gray-200 dark:border-gray-700 pt-4">
          Demo project: Christmas on the Hill. Use this structure to track permission, costing, sponsor letters, services, taskings, follow-ups, and guest list.
        </p>
      </div>
    </div>
  );
}
