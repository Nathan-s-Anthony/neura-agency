import type { Capability } from "../../types/capability.ts";

const agencyCapabilities: Capability[] = [
  {
    id: "problem-discovery",
    name: "Problem Discovery",
    description: "Understand the underlying client problem and goals.",
  },
  {
    id: "requirements-discovery",
    name: "Requirements Discovery",
    description: "Identify and document project requirements.",
  },
  {
    id: "system-architecture",
    name: "System Architecture",
    description: "Design the technical architecture of a project.",
  },
  {
    id: "technology-selection",
    name: "Technology Selection",
    description: "Select technologies appropriate for project requirements.",
  },
  {
    id: "task-planning",
    name: "Task Planning",
    description: "Break project requirements into implementable tasks.",
  },
  {
    id: "frontend-development",
    name: "Frontend Development",
    description: "Implement frontend application functionality.",
  },
  {
    id: "backend-development",
    name: "Backend Development",
    description: "Implement backend application functionality.",
  },
  {
    id: "testing",
    name: "Testing",
    description: "Create and execute software tests.",
  },
  {
    id: "functional-testing",
    name: "Functional Testing",
    description: "Validate application functionality against requirements.",
  },
];
export { agencyCapabilities };
