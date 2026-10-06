import type { TaskDefinition } from "./task-def.ts";
import type { WorkflowCondition } from "./workFlowConditions.ts";
export interface Stage {
  id: string;
  name: string;
  order: number;
  requiredCapabilities: string[];
  entryConditions: string[];
  exitConditions: WorkflowCondition[];
  taskDefinitions: TaskDefinition[];
}
