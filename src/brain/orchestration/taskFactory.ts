import type { TaskDefinition } from "../../types/task-def.ts";
import type { Task } from "../../types/task.ts";

export class TaskFactory {
  createTask(
    definition: TaskDefinition,
    projectId: string,
    stage: string,
  ): Task {
    return {
      id: `${projectId}:${definition.id}`,

      projectId,

      title: definition.title,

      description: definition.description,

      status: "pending",

      stage,

      requiredCapabilities: definition.requiredCapabilities,

      dependencies: definition.dependencies.map(
        (dependency) => `${projectId}:${dependency}`,
      ),

      acceptanceCriteria: definition.acceptanceCriteria,

      artifacts: [],
    };
  }
}
