import type { Artifact } from "./artifact.ts";
import type { Decision } from "./decision.ts";
import type { Task } from "./task.ts";

export interface Project {
  id: string;
  name: string;
  status: ProjectStatus;
  brief?: Artifact;
  requirements: Artifact[];
  currentWorkflow?: string;
  currentStage?: string;
  tasks: Task[];
  artifacts: Artifact[];
  decisions: Decision[];
  createdAt: Date;
  updatedAt: Date;
}
export type ProjectStatus =
  | "intake"
  | "discovery"
  | "planning"
  | "development"
  | "qa"
  | "delivery"
  | "completed"
  | "blocked"
  | "cancelled";
