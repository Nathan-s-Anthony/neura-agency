import type { Artifact } from "../../types/artifact.ts";
import type { Decision } from "../../types/decision.ts";
import type { Task } from "../../types/task.ts";

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

export class Project {
  public readonly id: string;
  public readonly name: string;

  public status: ProjectStatus;

  public brief?: Artifact;

  public requirements: Artifact[];

  public currentWorkflow?: string;
  public currentStage?: string;

  public tasks: Task[];
  public artifacts: Artifact[];
  public decisions: Decision[];

  public readonly createdAt: Date;
  public updatedAt: Date;

  constructor(id: string, name: string) {
    this.id = id;
    this.name = name;

    this.status = "intake";

    this.requirements = [];
    this.tasks = [];
    this.artifacts = [];
    this.decisions = [];

    this.createdAt = new Date();
    this.updatedAt = new Date();
  }

  addTask(task: Task): void {
    this.tasks.push(task);
    this.touch();
  }

  addRequirement(requirement: Artifact): void {
    this.requirements.push(requirement);
    this.touch();
  }

  addArtifact(artifact: Artifact): void {
    this.artifacts.push(artifact);
    this.touch();
  }

  addDecision(decision: Decision): void {
    this.decisions.push(decision);
    this.touch();
  }

  setStatus(status: ProjectStatus): void {
    this.status = status;
    this.touch();
  }

  setStage(stage: string): void {
    this.currentStage = stage;
    this.touch();
  }

  setWorkflow(workflow: string): void {
    this.currentWorkflow = workflow;
    this.touch();
  }

  getTask(taskId: string): Task | undefined {
    return this.tasks.find((task) => task.id === taskId);
  }

  getPendingTasks(): Task[] {
    return this.tasks.filter((task) => task.status === "pending");
  }

  private touch(): void {
    this.updatedAt = new Date();
  }
}
