/**
 * Christmas on the Hill – Project management types
 */

export type DeliverableStatus = "not-started" | "in-progress" | "review" | "completed";

export interface SubTask {
  id: string;
  title: string;
  dueDate: string;
  status: DeliverableStatus;
  assignee?: string;
}

export interface Deliverable {
  id: string;
  title: string;
  description?: string;
  startDate: string;
  dueDate: string;
  status: DeliverableStatus;
  subTasks?: SubTask[];
}

export interface Project {
  id: string;
  name: string;
  eventDate: string;
  deliverables: Deliverable[];
}
