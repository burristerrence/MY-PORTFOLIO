import type { Project } from "./christmas-on-the-hill-types";

export const CHRISTMAS_ON_THE_HILL: Project = {
  id: "coth-2025",
  name: "Christmas on the Hill",
  eventDate: "2025-12-14",
  deliverables: [
    {
      id: "d1",
      title: "Permission to host the event",
      description: "Secure formal approval and permits to host Christmas on the Hill at the venue.",
      startDate: "2025-09-01",
      dueDate: "2025-10-15",
      status: "completed",
      subTasks: [
        { id: "d1-1", title: "Draft application and risk assessment", dueDate: "2025-09-15", status: "completed" },
        { id: "d1-2", title: "Submit to venue and local authority", dueDate: "2025-09-30", status: "completed" },
        { id: "d1-3", title: "Obtain written permission", dueDate: "2025-10-15", status: "completed" },
      ],
    },
    {
      id: "d2",
      title: "Costing",
      description: "Full budget and cost breakdown for the event.",
      startDate: "2025-09-15",
      dueDate: "2025-10-31",
      status: "in-progress",
      subTasks: [
        { id: "d2-1", title: "Venue, catering, and logistics costs", dueDate: "2025-10-10", status: "completed" },
        { id: "d2-2", title: "Entertainment and programme costs", dueDate: "2025-10-20", status: "in-progress" },
        { id: "d2-3", title: "Final budget sign-off", dueDate: "2025-10-31", status: "not-started" },
      ],
    },
    {
      id: "d3",
      title: "Letters to sponsors",
      description: "Sponsorship requests and thank-you correspondence.",
      startDate: "2025-10-01",
      dueDate: "2025-11-15",
      status: "in-progress",
      subTasks: [
        { id: "d3-1", title: "Draft sponsorship proposal and tiers", dueDate: "2025-10-15", status: "completed" },
        { id: "d3-2", title: "Send letters to potential sponsors", dueDate: "2025-10-25", status: "in-progress" },
        { id: "d3-3", title: "Follow up and confirm commitments", dueDate: "2025-11-15", status: "not-started" },
      ],
    },
    {
      id: "d4",
      title: "Request for services",
      description: "Secure external services (catering, security, AV, etc.).",
      startDate: "2025-10-15",
      dueDate: "2025-11-30",
      status: "in-progress",
      subTasks: [
        { id: "d4-1", title: "Request quotes from vendors", dueDate: "2025-11-01", status: "in-progress" },
        { id: "d4-2", title: "Select and contract services", dueDate: "2025-11-15", status: "not-started" },
        { id: "d4-3", title: "Confirm all service bookings", dueDate: "2025-11-30", status: "not-started" },
      ],
    },
    {
      id: "d5",
      title: "Taskings",
      description: "Assign and track internal tasks and responsibilities.",
      startDate: "2025-10-20",
      dueDate: "2025-12-01",
      status: "in-progress",
      subTasks: [
        { id: "d5-1", title: "Publish tasking matrix and assign owners", dueDate: "2025-11-01", status: "in-progress" },
        { id: "d5-2", title: "Brief all task owners", dueDate: "2025-11-15", status: "not-started" },
        { id: "d5-3", title: "All taskings acknowledged and on track", dueDate: "2025-12-01", status: "not-started" },
      ],
    },
    {
      id: "d6",
      title: "Follow up request",
      description: "Follow up on pending approvals, confirmations, and commitments.",
      startDate: "2025-11-01",
      dueDate: "2025-12-07",
      status: "not-started",
      subTasks: [
        { id: "d6-1", title: "Follow up with sponsors and services", dueDate: "2025-11-20", status: "not-started" },
        { id: "d6-2", title: "Chase outstanding confirmations", dueDate: "2025-12-01", status: "not-started" },
        { id: "d6-3", title: "Final follow-up round before event", dueDate: "2025-12-07", status: "not-started" },
      ],
    },
    {
      id: "d7",
      title: "Guest list",
      description: "Compile, manage, and finalise the event guest list.",
      startDate: "2025-11-01",
      dueDate: "2025-12-10",
      status: "in-progress",
      subTasks: [
        { id: "d7-1", title: "Draft invite list and send invitations", dueDate: "2025-11-15", status: "in-progress" },
        { id: "d7-2", title: "Collect RSVPs and dietary requirements", dueDate: "2025-12-01", status: "not-started" },
        { id: "d7-3", title: "Finalise guest list and seating", dueDate: "2025-12-10", status: "not-started" },
      ],
    },
  ],
};

/** Timeline range for the project (for Gantt-style display) */
export const PROJECT_START = "2025-09-01";
export const PROJECT_END = "2025-12-14";
