import type { Stage } from "./stage.ts";

export interface Workflow {
  id: string;
  name: string;
  description: string;
  stages: Stage[];
}
