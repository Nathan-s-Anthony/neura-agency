import type { Agent } from "../types/agent.ts";
import type { Capability } from "../types/capability.ts";
import type { Project } from "../types/project.ts";
import type { Workflow } from "../types/workflow.ts";

export class AgencyBrain {
  private agents: Map<string, Agent>;
  private capabilities: Map<string, Capability>;
  private workflows: Map<string, Workflow>;
  private projects: Map<string, Project>;

  constructor(
    agents: Agent[] = [],
    capabilities: Capability[] = [],
    workflows: Workflow[] = [],
  ) {
    this.agents = new Map(agents.map((agent) => [agent.id, agent]));
    this.capabilities = new Map(
      capabilities.map((capability) => [capability.id, capability]),
    );

    this.workflows = new Map(
      workflows.map((workflow) => [workflow.id, workflow]),
    );
    this.projects = new Map();
  }

  getAgent(id: string): Agent | undefined {
    return this.agents.get(id);
  }

  getCapability(id: string): Capability | undefined {
    return this.capabilities.get(id);
  }

  getWorkflow(id: string): Workflow | undefined {
    return this.workflows.get(id);
  }

  findAgentsByCapability(capabilityId: string): Agent[] {
    return Array.from(this.agents.values()).filter((agent) =>
      agent.capabilities.includes(capabilityId),
    );
  }

  registerAgent(agent: Agent): void {
    this.agents.set(agent.id, agent);
  }

  registerCapability(capability: Capability): void {
    this.capabilities.set(capability.id, capability);
  }

  registerWorkflow(workflow: Workflow): void {
    this.workflows.set(workflow.id, workflow);
  }

  createProject(project: Project): void {
    this.projects.set(project.id, project);
  }

  getProject(id: string): Project | undefined {
    return this.projects.get(id);
  }

  getProjects(): Project[] {
    return Array.from(this.projects.values());
  }
}
