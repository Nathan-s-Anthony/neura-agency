import type { Task } from "../types/task.ts";
import type { TaskResult } from "../types/taskResults.ts";
import type { TaskDefinition } from "../types/task-def.ts";

import { brain } from "./index.ts";
import { Orchestrator } from "./orchestration/orchestrator.ts";
import { Project } from "./project/project.ts";

const orchestrator = new Orchestrator(brain);

// console.log("=================================");
// console.log("       AGENCY BRAIN TEST");
// console.log("=================================");

// // ---------------------------------
// // Test 1 — Inspect registered agents
// // ---------------------------------

// console.log("\n--- Registered Agents ---");

// console.log(brain.getAgent("client-agent"));
// console.log(brain.getAgent("tech-lead"));
// console.log(brain.getAgent("lead-developer"));
// console.log(brain.getAgent("qa-agent"));

// // ---------------------------------
// // Test 2 — Find agents by capability
// // ---------------------------------

// console.log("\n--- Architecture Capability ---");

// const architectureAgents = brain.findAgentsByCapability("system-architecture");

// console.log(architectureAgents);

// // ---------------------------------
// // Create Project
// // ---------------------------------

// const project = new Project("project-001", "Client Booking Platform");

// project.setWorkflow("software-project");
// project.setStage("planning");

// // ---------------------------------
// // Create Tasks
// // ---------------------------------

// const architectureTask: Task = {
//   id: "task-001",
//   projectId: "project-001",

//   title: "Design application architecture",

//   description:
//     "Create the initial technical architecture for the client application.",

//   status: "pending",
//   stage: "planning",

//   requiredCapabilities: ["system-architecture", "technology-selection"],

//   dependencies: [],

//   acceptanceCriteria: [
//     "Architecture is documented",
//     "Technology choices are documented",
//     "Major integrations are identified",
//   ],

//   artifacts: [],
// };

// const developmentTask: Task = {
//   id: "task-002",
//   projectId: "project-001",

//   title: "Build authentication API",

//   description: "Implement the authentication API for the application.",

//   status: "pending",
//   stage: "development",

//   requiredCapabilities: ["backend-development", "api-development"],

//   dependencies: ["task-001"],

//   acceptanceCriteria: [
//     "Login endpoint exists",
//     "Authentication is validated",
//     "Errors are handled",
//     "Tests are included",
//   ],

//   artifacts: [],
// };

// const qaTask: Task = {
//   id: "task-003",
//   projectId: "project-001",

//   title: "Test authentication API",

//   description: "Validate the authentication API against its requirements.",

//   status: "pending",
//   stage: "qa",

//   requiredCapabilities: ["functional-testing", "acceptance-testing"],

//   dependencies: ["task-002"],

//   acceptanceCriteria: [
//     "Valid credentials are accepted",
//     "Invalid credentials are rejected",
//     "Authentication errors are handled",
//   ],

//   artifacts: [],
// };
// const definition: TaskDefinition = {
//   id: "design-architecture",

//   title: "Design application architecture",

//   description:
//     "Create the initial technical architecture for the client application.",

//   requiredCapabilities: ["system-architecture", "technology-selection"],

//   dependencies: [],

//   acceptanceCriteria: [
//     "Architecture is documented",
//     "Technology choices are documented",
//     "Major integrations are identified",
//   ],
// };
// // project.addTask(architectureTask);
// // project.addTask(developmentTask);
// // project.addTask(qaTask);

// // ---------------------------------
// // Test 3 — Architecture Evaluation
// // ---------------------------------

// console.log("\n--- Architecture Evaluation ---");

// console.log(orchestrator.evaluateTask(architectureTask));

// // ---------------------------------
// // Test 4 — Developer Evaluation
// // ---------------------------------

// console.log("\n--- Developer Evaluation ---");

// console.log(orchestrator.evaluateTask(developmentTask));

// // ---------------------------------
// // Test 5 — QA Evaluation
// // ---------------------------------

// console.log("\n--- QA Evaluation ---");

// console.log(orchestrator.evaluateTask(qaTask));

// // ---------------------------------
// // Test 6 — Unknown Capability
// // ---------------------------------

// console.log("\n--- Unknown Capability ---");

// const unknownTask: Task = {
//   id: "task-004",
//   projectId: "project-001",

//   title: "Design quantum navigation system",

//   description: "Create a quantum navigation system for the application.",

//   status: "pending",
//   stage: "research",

//   requiredCapabilities: ["quantum-navigation"],

//   dependencies: [],

//   acceptanceCriteria: ["Navigation system is implemented"],

//   artifacts: [],
// };

// console.log(orchestrator.evaluateTask(unknownTask));

// // =================================
// // PROJECT LIFECYCLE
// // =================================

// // ---------------------------------
// // Cycle 1 — Planning
// // ---------------------------------

// console.log("\n--- PROJECT CYCLE 1 ---");

// let decision = orchestrator.runProjectCycle(project);

// console.log("Decision:", decision);

// let assignedTask = orchestrator.executeDecision(decision);

// console.log("Assigned:", assignedTask);

// // ---------------------------------
// // Tech Lead works
// // ---------------------------------

// if (assignedTask) {
//   orchestrator.startTask(assignedTask);

//   const result: TaskResult = {
//     taskId: assignedTask.id,

//     agentId: assignedTask.assignedAgent!,

//     status: "success",

//     summary: "Application architecture completed.",

//     artifacts: ["architecture.md"],

//     findings: [],

//     createdAt: new Date(),
//   };

//   orchestrator.submitTaskResult(assignedTask, result);

//   console.log("Submitted:", assignedTask);

//   // QA/review approves it
//   orchestrator.completeTask(assignedTask);

//   console.log("Completed:", assignedTask);
// }

// // ---------------------------------
// // Cycle 2 — Advance Workflow
// // ---------------------------------

// console.log("\n--- PROJECT CYCLE 2 ---");

// decision = orchestrator.runProjectCycle(project);

// console.log("Decision:", decision);

// console.log("Current Stage:", project.currentStage);

// // ---------------------------------
// // Cycle 3 — Development
// // ---------------------------------

// console.log("\n--- PROJECT CYCLE 3 ---");

// decision = orchestrator.runProjectCycle(project);

// console.log("Decision:", decision);

// assignedTask = orchestrator.executeDecision(decision);

// console.log("Assigned:", assignedTask);

// // ---------------------------------
// // Lead Developer works
// // ---------------------------------

// if (assignedTask) {
//   orchestrator.startTask(assignedTask);

//   const result: TaskResult = {
//     taskId: assignedTask.id,

//     agentId: assignedTask.assignedAgent!,

//     status: "success",

//     summary: "Authentication API implemented successfully.",

//     artifacts: ["src/api/auth/login.ts", "tests/auth/login.test.ts"],

//     findings: [],

//     createdAt: new Date(),
//   };

//   orchestrator.submitTaskResult(assignedTask, result);

//   console.log("Developer Result:", assignedTask);

//   orchestrator.completeTask(assignedTask);

//   console.log("Development Completed:", assignedTask);
// }
// const orchestrator = new Orchestrator(brain);
// const project = new Project("project-001", "Client Booking Platform");

// project.setWorkflow("software-project");
// project.setStage("planning");
// orchestrator.runProjectCycle(project);

// console.log("\n--- PROJECT CYCLE 1 ---");

// let decision = orchestrator.runProjectCycle(project);

// console.log("Decision:", decision);

// console.log("Tasks:", project.tasks);
// project.addTask({
//   id: "task-001",
//   projectId: "project-001",
//   title: "Design Application Architecture",
//   description: "Create a detailed design for the application architecture.",
//   requiredCapabilities: ["architecture-design"],
//   status: "pending",
//   stage: "",
//   dependencies: [],
//   acceptanceCriteria: [],
//   artifacts: [],
// });
// console.log("\n--- PROJECT CYCLE 1 ---");

// console.log("Tasks before cycle:", project.tasks);

// let decision = orchestrator.runProjectCycle(project);

// console.log("Decision:", decision);

// console.log("Tasks after cycle:", project.tasks);
// let assignedTask = orchestrator.executeDecision(decision);
// if (assignedTask) {
//   orchestrator.startTask(assignedTask);

//   const result: TaskResult = {
//     taskId: assignedTask.id,

//     agentId: assignedTask.assignedAgent!,

//     status: "success",

//     summary: "Application architecture completed.",

//     artifacts: ["architecture.md"],

//     findings: [],

//     createdAt: new Date(),
//   };

//   orchestrator.submitTaskResult(assignedTask, result);

//   console.log("Submitted:", assignedTask);

//   orchestrator.completeTask(assignedTask);

//   console.log("Completed:", assignedTask);
// }

// console.log("\n--- PROJECT CYCLE 2 ---");

// decision = orchestrator.runProjectCycle(project);

// console.log("Decision:", decision);

// console.log("Current Stage:", project.currentStage);

// console.log("Project Tasks:", project.tasks);

// console.log("\n--- PROJECT CYCLE 3 ---");

// decision = orchestrator.runProjectCycle(project);

// console.log("Decision:", decision);

// assignedTask = orchestrator.executeDecision(decision);

// console.log("Assigned:", assignedTask);
// console.log("Project Tasks:", project);
const project = new Project("project-001", "Client Booking Platform");

project.setWorkflow("software-project");
project.setStage("planning");

console.log("\n==============================");
console.log("INITIAL PROJECT");
console.log("==============================");

console.log("Stage:", project.currentStage);
console.log("Tasks:", project.tasks);

// --------------------------------------------------
// CYCLE 1
// --------------------------------------------------

console.log("\n==============================");
console.log("PROJECT CYCLE 1");
console.log("==============================");

let decision = orchestrator.processProject(project);
let assignedTask = orchestrator.executeDecision(decision);
console.log("Decision:", decision);
console.log("Stage:", project.currentStage);
console.log("Tasks:", project.tasks);

// --------------------------------------------------
// EXECUTE ARCHITECTURE TASK
// --------------------------------------------------

if (assignedTask) {
  orchestrator.startTask(assignedTask);

  const result: TaskResult = {
    taskId: assignedTask.id,
    agentId: assignedTask.assignedAgent!,
    status: "success",
    summary: "Application architecture completed.",
    artifacts: ["architecture.md"],
    findings: [],
    createdAt: new Date(),
  };

  orchestrator.submitTaskResult(assignedTask, result);

  orchestrator.completeTask(assignedTask);
}

console.log("\nArchitecture task completed.");

// --------------------------------------------------
// CYCLE 2
// --------------------------------------------------

console.log("\n==============================");
console.log("PROJECT CYCLE 2");
console.log("==============================");

decision = orchestrator.processProject(project);

console.log("Decision:", decision);
console.log("Stage:", project.currentStage);
console.log("Tasks:", project.tasks);

// --------------------------------------------------
// CYCLE 3
// --------------------------------------------------

console.log("\n==============================");
console.log("PROJECT CYCLE 3");
console.log("==============================");

decision = orchestrator.processProject(project);

console.log("Decision:", decision);
console.log("Stage:", project.currentStage);
console.log("Tasks:", project.tasks);

console.log("\n==============================");
console.log("PROJECT CYCLE 4");
console.log("==============================");

assignedTask = orchestrator.executeDecision(decision);

if (assignedTask) {
  orchestrator.startTask(assignedTask);

  const result: TaskResult = {
    taskId: assignedTask.id,
    agentId: assignedTask.assignedAgent!,
    status: "success",
    summary: "Authentication API implemented.",
    artifacts: ["authentication-api.ts"],
    findings: [],
    createdAt: new Date(),
  };

  orchestrator.submitTaskResult(assignedTask, result);

  orchestrator.completeTask(assignedTask);
}
console.log("\n==============================");
console.log("PROJECT CYCLE 4");
console.log("==============================");

decision = orchestrator.processProject(project);

console.log("Decision:", decision);
console.log("Stage:", project.currentStage);
console.log("Tasks:", project.tasks);
