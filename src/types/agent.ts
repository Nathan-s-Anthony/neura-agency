export interface Agent {
  id: string;
  name: string;
  role: string;

  capabilities: string[];

  inputs: string[];
  outputs: string[];

  status: AgentStatus;
}
type AgentStatus = "available" | "busy" | "blocked" | "offline";
