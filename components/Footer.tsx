"use client";

import { Github, Linkedin, Twitter } from "lucide-react";
import FadeInUp from "./FadeInUp";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "GitHub",
      icon: Github,
      href: "https://github.com",
      color: "hover:text-gray-900 dark:hover:text-gray-100",
      bgColor: "hover:bg-gray-100 dark:hover:bg-gray-800",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: "https://linkedin.com",
      color: "hover:text-blue-600 dark:hover:text-blue-400",
      bgColor: "hover:bg-blue-50 dark:hover:bg-blue-900/20",
    },
    {
      name: "Twitter",
      icon: Twitter,
      href: "https://twitter.com",
      color: "hover:text-sky-500 dark:hover:text-sky-400",
      bgColor: "hover:bg-sky-50 dark:hover:bg-sky-900/20",
    },
  ];

  return (
    <footer className="bg-gray-900 dark:bg-black border-t border-gray-800 dark:border-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 md:py-12">
        <FadeInUp>
          <div className="flex flex-col items-center justify-center space-y-5 sm:space-y-6">
            {/* Social Media Icons */}
            <div className="flex items-center justify-center gap-3 sm:gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group relative p-2.5 sm:p-3 rounded-full bg-gray-800 dark:bg-gray-900 border border-gray-700 dark:border-gray-800 text-gray-400 dark:text-gray-500 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 active:scale-95 ${social.color} ${social.bgColor}`}
                    aria-label={`Visit my ${social.name} profile`}
                  >
                    <Icon className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover:scale-110" />
                    {/* Tooltip */}
                    <span className="absolute -top-10 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-gray-800 dark:bg-gray-700 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
                      {social.name}
                    </span>
                  </a>
                );
              })}
            </div>

            {/* Copyright */}
            <div className="text-center px-4">
              <p className="text-gray-400 dark:text-gray-500 text-xs sm:text-sm">
                © {currentYear} Terrence Burris. All rights reserved.
              </p>
              <p className="text-gray-500 dark:text-gray-600 text-xs mt-1 sm:mt-2">
                Built with Next.js, TypeScript & Tailwind CSS
              </p>
            </div>
          </div>
        </FadeInUp>
      </div>
    </footer>
  );
}
