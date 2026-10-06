import type { Task } from "../../types/task.ts";
import type { AgencyBrain } from "../brain.ts";
import type { OrchestrationDecision } from "../../types/orchestration.ts";
import type { TaskResult } from "../../types/taskResults.ts";
import { WorkflowEngine } from "./workflowEngine.ts";
import { TaskFactory } from "./taskFactory.ts";
import type { Project } from "../project/project.ts";
import { ConditionEvaluator } from "./conditionEvaluator.ts";
export class Orchestrator {
  private readonly brain: AgencyBrain;
  private readonly workflowEngine: WorkflowEngine;

  constructor(brain: AgencyBrain) {
    this.brain = brain;

    const factory = new TaskFactory();

    const workflow = brain.getWorkflow("software-project");
    const conditionEvaluator = new ConditionEvaluator();
    if (!workflow) {
      throw new Error("Software project workflow is not registered.");
    }

    this.workflowEngine = new WorkflowEngine(
      workflow,
      factory,
      conditionEvaluator,
    );
  }
  assignTask(task: Task): Task {
    const agent = this.findAgentForTask(task);
    if (!agent) {
      throw new Error(`No available agent found for task: ${task.title}`);
    }
    task.assignedAgent = agent.id;
    task.status = "assigned";
    return task;
  }
  orchestrateProject(project: Project) {
    const task = this.getNextTask(project);
    if (!task) {
      return {
        action: "wait" as const,
        reason: "No task is currently ready to execute.",
      };
    }

    return this.evaluateTask(task);
  }
  evaluateTask(task: Task): OrchestrationDecision {
    const agent = this.findAgentForTask(task);

    if (!agent) {
      return {
        action: "escalate",
        reason: `No available agent can satisfy task requirements.`,
      };
    }

    return {
      action: "assign-task",
      task,
      agentId: agent.id,
      reason: `${agent.name} has the required capabilities.`,
    };
  }
  getNextTask(project: Project): Task | undefined {
    const pendingTasks = project.tasks.filter(
      (task) =>
        task.status === "pending" && task.stage === project.currentStage,
    );

    for (const task of pendingTasks) {
      const dependenciesComplete = task.dependencies.every(
        (dependencyId) =>
          project.tasks.find((dependency) => dependency.id === dependencyId)
            ?.status === "completed",
      );

      if (!dependenciesComplete) {
        continue;
      }

      return task;
    }

    return undefined;
  }
  private ensureStageActive(project: Project): void {
    const stage = this.workflowEngine.getCurrentStage(project);

    if (!stage) {
      throw new Error("Project has no active workflow stage.");
    }

    this.workflowEngine.createStageTasks(project);
  }
  executeDecision(decision: OrchestrationDecision): Task | undefined {
    if (decision.action !== "assign-task") {
      return undefined;
    }

    if (!decision.task || !decision.agentId) {
      throw new Error("Cannot assign task: task or agent is missing.");
    }

    decision.task.assignedAgent = decision.agentId;
    decision.task.status = "assigned";

    return decision.task;
  }
  findAgentForTask(task: Task) {
    const candidates = Array.from(
      new Set(
        task.requiredCapabilities.flatMap((capability) =>
          this.brain.findAgentsByCapability(capability),
        ),
      ),
    );

    return candidates.find((agent) => {
      if (agent.status !== "available") {
        return false;
      }

      return task.requiredCapabilities.every((capability) =>
        agent.capabilities.includes(capability),
      );
    });
  }
  startTask(task: Task): Task {
    if (task.status !== "assigned") {
      throw new Error(
        `Task ${task.id} cannot be started because it is not assigned.`,
      );
    }

    task.status = "in-progress";

    return task;
  }
  approveTask(task: Task): Task {
    if (task.status !== "review") {
      throw new Error(
        `Task ${task.id} cannot be approved because it is not under review.`,
      );
    }

    task.status = "completed";

    return task;
  }
  rejectTask(task: Task, reason: string): Task {
    if (task.status !== "review") {
      throw new Error(
        `Task ${task.id} cannot be rejected because it is not under review.`,
      );
    }

    task.status = "in-progress";
    task.blockedReason = reason;

    return task;
  }
  submitTaskResult(task: Task, result: TaskResult): Task {
    if (task.status !== "in-progress") {
      throw new Error(
        `Task ${task.id} cannot submit a result because it is not in progress.`,
      );
    }

    if (result.taskId !== task.id) {
      throw new Error(`Task result does not belong to task ${task.id}.`);
    }

    task.result = result;
    task.status = "review";

    return task;
  }
  completeTask(task: Task): Task {
    if (task.status !== "review") {
      throw new Error(
        `Task ${task.id} cannot be completed because it is not under review.`,
      );
    }
    task.status = "completed";
    return task;
  }
  blockTask(task: Task, reason: string): Task {
    task.status = "blocked";
    task.blockedReason = reason;

    return task;
  }

  failTask(task: Task, reason: string): Task {
    task.status = "failed";
    task.blockedReason = reason;

    return task;
  }
  processProject(project: Project): OrchestrationDecision {
    this.ensureStageActive(project);

    const nextTask = this.getNextTask(project);

    if (nextTask) {
      return this.evaluateTask(nextTask);
    }

    const nextStage = this.workflowEngine.advanceProject(project);

    if (nextStage) {
      return {
        action: "advance-stage",
        reason: `Project advanced to stage: ${nextStage.name}`,
      };
    }

    project.setStatus("completed");

    return {
      action: "complete",
      reason: "Project has completed all workflow stages.",
    };
  }
}
