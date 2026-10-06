import { Agent } from "./agent.ts";
import { Capability } from "./capability.ts";
import { Workflow } from "./workflow.ts";

export interface Agency {
  id: string;
  name: string;
  version: string;
  agents: Agent[];
  capabilities: Capability[];
  workflows: Workflow[];
}
