import { useState } from "react";
import heroImg from "./assets/hero.png";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import "./App.css";
import { brain } from "../../src/brain/index.ts";
import { Orchestrator } from "../../src/brain/orchestration/orchestrator.ts";
import { Project } from "../../src/brain/project/project.ts";
import type { TaskResult } from "../../src/types/taskResults.ts";
import Logo from "../../src/images/logo3.png";
import Aside from "./components/aside.tsx";
import Dashboard from "./components/dashboard.tsx";

function App() {
  const [count, setCount] = useState(0);
  const orchestrator = new Orchestrator(brain);

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

  return (
    <>
      <div className="bg-slate-200 m-4 p-6 rounded-xl">
        <div className="border rounded-xl p-6">
          <div className="flex items-center gap-2 flex-col">
            <img src={Logo} width={100} />
            <h1 className="">Neura Agency</h1>
          </div>
          <div className="grid grid-cols-2 mt-10">
            <div className="w-full">
              <div className="w-full p-6">
                <h2 className="text-xl font-bold mb-2">Agents</h2>
                <div className=" grid lg:grid-cols-3 gap-2">
                  <div className="rounded-sm p-6 bg-blue-500 ">Tech Lead</div>
                  <div className="rounded-sm p-6 bg-blue-500">
                    Lead Developer
                  </div>
                  <div className="rounded-sm p-6 bg-blue-500">QA</div>
                </div>
              </div>
            </div>
            <div className="w-full">
              <div className="w-full">
                <div className="w-full p-6">
                  <h2 className="text-xl font-bold mb-2">Tasks</h2>
                  <div className=" grid lg:grid-cols-3 gap-2">
                    <div className="rounded-sm p-6 bg-blue-500 ">test</div>
                    <div className="rounded-sm p-6 bg-blue-500">test</div>
                    <div className="rounded-sm p-6 bg-blue-500">test</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
