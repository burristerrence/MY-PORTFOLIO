"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function HeartsAndMindBlogPage() {
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
            <h1 className="text-lg font-bold text-gray-900 dark:text-white">Hearts and Mind Blog</h1>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-gray-600 dark:text-gray-400"
        >
          IATF Hearts and Minds Programme: stories, updates, and community engagement.
        </motion.p>

        <motion.section
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05 }}
          className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 shadow-sm"
        >
          <div className="p-4 sm:p-5 border-b border-gray-100 dark:border-gray-700">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">IATF Hearts & Minds — FADE & BRAID</h2>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Beetham Gardens Community Center</p>
          </div>
          <img
            src="/hearts-and-mind-fade-braid.jpg"
            alt="IATF Hearts and Minds FADE and BRAID event at Beetham Gardens Community Center"
            className="w-full h-auto object-cover"
          />
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 shadow-sm"
        >
          <div className="p-4 sm:p-5 border-b border-gray-100 dark:border-gray-700">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Video</h2>
          </div>
          <div className="aspect-video bg-black flex items-center justify-center">
            <video
              className="w-full h-full object-contain"
              controls
              playsInline
              poster="/hearts-and-mind-fade-braid.jpg"
            >
              <source src="/hearts-and-mind-blog-video.mp4" type="video/mp4" />
              <source src="/hearts-and-mind-blog-video.webm" type="video/webm" />
              <p className="text-white p-4 text-center">
                Add a video file to the <code className="bg-white/10 px-1 rounded">public</code> folder as{" "}
                <code className="bg-white/10 px-1 rounded">hearts-and-mind-blog-video.mp4</code> (or .webm).
              </p>
            </video>
          </div>
        </motion.section>

        <p className="text-xs text-gray-500 dark:text-gray-400">
          Place your video in the project <strong>public</strong> folder and name it{" "}
          <strong>hearts-and-mind-blog-video.mp4</strong> (or .webm) for it to appear above.
        </p>
      </div>
    </div>
  );
}
