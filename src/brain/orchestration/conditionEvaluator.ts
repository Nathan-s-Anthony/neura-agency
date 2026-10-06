import type { WorkflowCondition } from "../../types/workFlowConditions.ts";
import type { Project } from "../project/project.ts";

export class ConditionEvaluator {
  evaluate(project: Project, condition: WorkflowCondition): boolean {
    switch (condition) {
      case "brief-created":
        return !!project.brief;

      case "requirements-created":
        return project.requirements.length > 0;

      case "planning-complete":
        return this.areStageTasksComplete(project, "planning");

      case "development-complete":
        return this.areStageTasksComplete(project, "development");

      case "qa-complete":
        return this.areStageTasksComplete(project, "qa");

      default:
        return false;
    }
  }

  private areStageTasksComplete(project: Project, stage: string): boolean {
    const tasks = project.tasks.filter((task) => task.stage === stage);

    return (
      tasks.length > 0 && tasks.every((task) => task.status === "completed")
    );
  }
}
