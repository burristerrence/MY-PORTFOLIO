"use client";

import { Moon, Sun } from "lucide-react";
import { useDarkMode } from "@/hooks/useDarkMode";

export default function DarkModeToggle() {
  const { isDarkMode, toggleDarkMode, mounted } = useDarkMode();

  if (!mounted) {
    // Return a placeholder to prevent layout shift
    return (
      <button
        className="p-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
        aria-label="Toggle dark mode"
      >
        <Sun className="w-5 h-5" />
      </button>
    );
  }

  return (
    <button
      onClick={toggleDarkMode}
      className="p-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300 transform hover:scale-110"
      aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
      title={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
    >
      {isDarkMode ? (
        <Sun className="w-5 h-5 transition-transform duration-300 rotate-0" />
      ) : (
        <Moon className="w-5 h-5 transition-transform duration-300 rotate-0" />
      )}
    </button>
  );
}
