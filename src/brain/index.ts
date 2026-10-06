import { softwareProjectWorkflow } from "../brain-engine/workflows/software-project.ts";
import { AgencyBrain } from "./brain.ts";
import { Orchestrator } from "./orchestration/orchestrator.ts";
import { TaskFactory } from "./orchestration/taskFactory.ts";
import { agencyAgents } from "./registry/agents.ts";
import { agencyCapabilities } from "./registry/capabilities.ts";

export const brain = new AgencyBrain(
  agencyAgents,
  agencyCapabilities,
  softwareProjectWorkflow,
);
const taskFactory = new TaskFactory();

const orchestrator = new Orchestrator(brain);
