"use client";

import FadeInUp from "./FadeInUp";

interface Project {
  id: number;
  title: string;
  description: string;
  tech: string[];
  image: string;
  projectUrl?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Police Innovation",
    description:
      "A comprehensive platform for modernizing police operations with AI-powered analytics, real-time reporting, and streamlined communication tools.",
    tech: ["Next.js", "TypeScript", "AI/ML", "PostgreSQL"],
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop",
    projectUrl: "https://example.com",
  },
  {
    id: 2,
    title: "Task Management App",
    description:
      "A collaborative task management application with real-time updates, team collaboration features, and intuitive project tracking.",
    tech: ["React", "Node.js", "Socket.io", "MongoDB"],
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop",
    projectUrl: "https://example.com",
  },
  {
    id: 3,
    title: "Weather Dashboard",
    description:
      "A beautiful weather dashboard with location-based forecasts, interactive data visualization, and detailed meteorological insights.",
    tech: ["React", "Tailwind CSS", "OpenWeather API"],
    image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=800&h=600&fit=crop",
    projectUrl: "https://example.com",
  },
  {
    id: 4,
    title: "Blog Platform",
    description:
      "A modern blog platform with markdown support, syntax highlighting, SEO optimization, and a beautiful reading experience.",
    tech: ["Next.js", "MDX", "Tailwind CSS"],
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&h=600&fit=crop",
    projectUrl: "https://example.com",
  },
  {
    id: 5,
    title: "Social Media Dashboard",
    description:
      "Analytics dashboard for social media metrics with comprehensive data visualization, reporting features, and performance insights.",
    tech: ["React", "Chart.js", "REST API"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    projectUrl: "https://example.com",
  },
  {
    id: 6,
    title: "Portfolio Website",
    description:
      "A responsive portfolio website showcasing projects, skills, and contact information with modern design and smooth animations.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=600&fit=crop",
    projectUrl: "https://example.com",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800"
    >
      <div className="max-w-7xl mx-auto">
        <FadeInUp className="text-center mb-10 sm:mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
            My Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto"></div>
          <p className="mt-4 sm:mt-6 text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto px-4">
            A collection of projects I&apos;ve worked on. Each project
            represents a unique challenge and learning experience.
          </p>
        </FadeInUp>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((project, index) => (
            <FadeInUp key={project.id} delay={index * 0.1}>
              <div className="group bg-white dark:bg-gray-900 rounded-lg sm:rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              {/* Placeholder Image */}
              <div className="relative h-40 sm:h-48 w-full overflow-hidden bg-gradient-to-br from-purple-500 to-blue-500">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  onError={(e) => {
                    // Fallback to gradient if image fails to load
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Card Content */}
              <div className="p-4 sm:p-6">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-2 sm:mb-3">
                  {project.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-3 sm:mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack Tags */}
                <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4 sm:mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 sm:px-3 py-0.5 sm:py-1 bg-gradient-to-r from-purple-100 to-blue-100 dark:from-purple-900/50 dark:to-blue-900/50 text-purple-700 dark:text-purple-300 rounded-full text-xs font-medium border border-purple-200 dark:border-purple-800"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* View Project Button */}
                <a
                  href={project.projectUrl || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-full px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white text-sm sm:text-base font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/50 group/btn"
                >
                  <span>View Project</span>
                  <svg
                    className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover/btn:translate-x-1 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </a>
              </div>
            </div>
            </FadeInUp>
          ))}
        </div>
      </div>
    </section>
  );
}
