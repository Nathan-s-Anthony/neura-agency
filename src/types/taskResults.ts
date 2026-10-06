export type TaskResultStatus = "success" | "partial" | "failed";

export interface TaskResult {
  taskId: string;
  agentId: string;
  status: TaskResultStatus;
  summary: string;
  artifacts: string[];
  findings?: string[];
  createdAt: Date;
}
