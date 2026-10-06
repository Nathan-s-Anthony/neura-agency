import type { TaskResult } from "./taskResults.ts";

export interface Task {
  id: string;
  projectId: string;
  stage: string;
  title: string;
  description: string;
  status: TaskStatus;
  assignedAgent?: string;
  requiredCapabilities: string[];
  dependencies: string[];
  acceptanceCriteria: string[];
  artifacts: string[];
  result?: TaskResult;
  blockedReason?: string;
}

export type TaskStatus =
  | "pending"
  | "assigned"
  | "in-progress"
  | "review"
  | "blocked"
  | "completed"
  | "failed";
