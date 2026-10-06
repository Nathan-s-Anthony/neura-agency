import type { Agent } from "../../types/agent.ts";

export const agencyAgents: Agent[] = [
  {
    id: "client-agent",
    name: "Client Agent",
    role: "client-discovery",
    capabilities: [
      "problem-discovery",
      "requirements-discovery",
      "scope-definition",
    ],
    inputs: ["client-request", "client-response"],
    outputs: ["project-brief", "requirements", "open-questions"],
    status: "available",
  },

  {
    id: "tech-lead",
    name: "Tech Lead Agent",
    role: "technical-leadership",
    capabilities: [
      "system-architecture",
      "technology-selection",
      "task-planning",
    ],
    inputs: ["project-brief", "requirements"],
    outputs: ["architecture", "technical-plan", "development-tasks"],
    status: "available",
  },

  {
    id: "lead-developer",
    name: "Lead Developer Agent",
    role: "development",
    capabilities: [
      "frontend-development",
      "backend-development",
      "api-development",
      "testing",
      "refactoring",
    ],
    inputs: ["development-task", "architecture"],
    outputs: ["source-code", "tests", "implementation-report"],
    status: "available",
  },

  {
    id: "qa-agent",
    name: "QA Agent",
    role: "quality-assurance",
    capabilities: [
      "requirement-validation",
      "functional-testing",
      "regression-testing",
      "acceptance-testing",
    ],
    inputs: ["requirements", "implementation"],
    outputs: ["qa-report", "defects"],
    status: "available",
  },
];
