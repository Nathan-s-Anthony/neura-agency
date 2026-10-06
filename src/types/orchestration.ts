import type { Task } from "./task.ts";

export type OrchestrationAction =
  | "assign-task"
  | "create-task"
  | "advance-stage"
  | "wait"
  | "complete"
  | "escalate";
export interface OrchestrationDecision {
  action: OrchestrationAction;
  task?: Task;
  agentId?: string;
  reason: string;
}
