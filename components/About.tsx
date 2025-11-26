"use client";

import FadeInUp from "./FadeInUp";

export default function About() {
  return (
    <section
      id="about"
      className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900"
    >
      <div className="max-w-7xl mx-auto">
        <FadeInUp className="text-center mb-10 sm:mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto"></div>
        </FadeInUp>

        <div className="grid md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center">
          <FadeInUp delay={0.2} className="space-y-6">
            <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              I&apos;m a passionate full-stack developer with a love for
              creating beautiful, functional, and user-centered digital
              experiences. With expertise in modern web technologies, I bring
              ideas to life through clean code and thoughtful design.
            </p>
            <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              When I&apos;m not coding, you can find me exploring new
              technologies, contributing to open-source projects, or sharing
              knowledge with the developer community.
            </p>

            <div className="pt-4 sm:pt-6">
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white mb-3 sm:mb-4">
                Skills & Technologies
              </h3>
              <div className="flex flex-wrap gap-2 sm:gap-3">
                {[
                  "React",
                  "Next.js",
                  "TypeScript",
                  "Node.js",
                  "Tailwind CSS",
                  "Python",
                  "PostgreSQL",
                  "MongoDB",
                  "Git",
                  "Docker",
                  "AWS",
                  "GraphQL",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 sm:px-4 py-1.5 sm:py-2 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-full text-xs sm:text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </FadeInUp>

          <FadeInUp delay={0.4} className="relative mt-8 md:mt-0">
            <div className="relative z-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl sm:rounded-2xl p-1">
              <div className="bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8">
                <div className="aspect-square bg-gradient-to-br from-purple-200 to-pink-200 dark:from-purple-900 dark:to-pink-900 rounded-lg sm:rounded-xl flex items-center justify-center">
                  <svg
                    className="w-24 h-24 sm:w-32 sm:h-32 text-purple-600 dark:text-purple-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl blur-2xl opacity-20 transform rotate-3"></div>
          </FadeInUp>
        </div>
      </div>
    </section>
  );
}
