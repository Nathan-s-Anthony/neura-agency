import type { Stage } from "../../types/stage.ts";
import type { Task } from "../../types/task.ts";
import type { Workflow } from "../../types/workflow.ts";
import type { Project } from "../project/project.ts";
import type { ConditionEvaluator } from "./conditionEvaluator.ts";
import type { TaskFactory } from "./taskFactory.ts";

export class WorkflowEngine {
  private readonly workflow: Workflow;
  private readonly taskFactory: TaskFactory;
  private readonly conditionEvaluator: ConditionEvaluator;

  constructor(
    workflow: Workflow,
    taskFactory: TaskFactory,
    conditionEvaluator: ConditionEvaluator,
  ) {
    this.workflow = workflow;
    this.taskFactory = taskFactory;
    this.conditionEvaluator = conditionEvaluator;
  }

  getCurrentStage(project: Project): Stage | undefined {
    if (!project.currentStage) {
      return undefined;
    }

    return this.workflow.stages.find(
      (stage) => stage.id === project.currentStage,
    );
  }

  canAdvance(project: Project): boolean {
    const currentStage = this.getCurrentStage(project);

    if (!currentStage) {
      return false;
    }

    return currentStage.exitConditions.every((condition) =>
      this.conditionEvaluator.evaluate(project, condition),
    );
  }
  activateStage(project: Project, stage: Stage): Task[] {
    project.setStage(stage.id);

    return this.createStageTasks(project);
  }
  advanceProject(project: Project): Stage | undefined {
    const currentStage = this.getCurrentStage(project);

    if (!currentStage) {
      throw new Error("Project does not have a current workflow stage.");
    }

    if (!this.canAdvance(project)) {
      return undefined;
    }

    const nextStage = this.workflow.stages
      .filter((stage) => stage.order > currentStage.order)
      .sort((a, b) => a.order - b.order)[0];

    if (!nextStage) {
      return undefined;
    }

    this.activateStage(project, nextStage);

    return nextStage;
  }

  private areStageTasksComplete(project: Project, stage: string): boolean {
    const tasks = project.tasks.filter((task) => task.stage === stage);

    return (
      tasks.length > 0 && tasks.every((task) => task.status === "completed")
    );
  }

  //CREATE STAGE TASKS

  createStageTasks(project: Project): Task[] {
    const stage = this.getCurrentStage(project);

    if (!stage) {
      throw new Error("Cannot create tasks without a current workflow stage.");
    }

    const existingTaskIds = new Set(project.tasks.map((task) => task.id));

    const createdTasks: Task[] = [];

    for (const definition of stage.taskDefinitions) {
      const taskId = `${project.id}:${definition.id}`;

      if (existingTaskIds.has(taskId)) {
        continue;
      }

      const task = this.taskFactory.createTask(
        definition,
        project.id,
        stage.id,
      );

      project.addTask(task);

      createdTasks.push(task);
    }

    return createdTasks;
  }
}
