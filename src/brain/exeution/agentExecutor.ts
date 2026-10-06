export class AgentExecutor {
  async execute(agent: Agent, task: Task): Promise<TaskResult> {
    console.log(`[AgentExecutor] ${agent.name} executing task: ${task.title}`);

    return {
      taskId: task.id,
      agentId: agent.id,
      status: "success",
      summary: `Task "${task.title}" completed by ${agent.name}.`,
      artifacts: [],
      findings: [],
      createdAt: new Date(),
    };
  }
}
