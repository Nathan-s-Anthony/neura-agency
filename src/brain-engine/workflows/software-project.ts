import type { Workflow } from "../../types/workflow.ts";

export const softwareProjectWorkflow: Workflow[] = [
  {
    id: "software-project",
    name: "Software Project",

    description:
      "Standard workflow for planning, building, testing and delivering software.",

    stages: [
      {
        id: "intake",
        name: "Intake",
        order: 1,
        requiredCapabilities: ["problem-discovery"],
        entryConditions: [],
        exitConditions: ["brief-created"],
        taskDefinitions: [],
      },

      {
        id: "discovery",
        name: "Discovery",
        order: 2,
        requiredCapabilities: ["problem-discovery", "requirements-discovery"],
        entryConditions: ["brief-created"],
        exitConditions: ["requirements-created"],
        taskDefinitions: [],
      },

      {
        id: "planning",

        name: "Planning",

        order: 3,

        requiredCapabilities: [
          "system-architecture",
          "technology-selection",
          "task-planning",
        ],

        entryConditions: ["requirements-created"],

        exitConditions: ["planning-complete"],

        taskDefinitions: [
          {
            id: "design-architecture",
            title: "Design application architecture",
            description:
              "Create the initial technical architecture for the client application.",

            requiredCapabilities: [
              "system-architecture",
              "technology-selection",
            ],
            dependencies: [],
            acceptanceCriteria: [
              "Architecture is documented",
              "Technology choices are documented",
              "Major integrations are identified",
            ],
          },
        ],
      },

      {
        id: "development",
        name: "Development",
        order: 4,
        requiredCapabilities: ["frontend-development", "backend-development"],
        entryConditions: ["planning-complete"],
        exitConditions: ["development-complete"],
        taskDefinitions: [
          {
            id: "build-authentication-api",

            title: "Build authentication API",
            description:
              "Implement the authentication API for the application.",

            requiredCapabilities: ["backend-development", "api-development"],

            dependencies: ["design-architecture"],
            acceptanceCriteria: [
              "Login endpoint exists",
              "Authentication is validated",
              "Errors are handled",
              "Tests are included",
            ],
          },
        ],
      },
      {
        id: "qa",

        name: "Quality Assurance",

        order: 5,

        requiredCapabilities: ["functional-testing", "acceptance-testing"],

        entryConditions: ["development-complete"],

        exitConditions: ["qa-complete"],

        taskDefinitions: [
          {
            id: "test-authentication-api",

            title: "Test authentication API",

            description:
              "Validate the authentication API against its requirements.",

            requiredCapabilities: ["functional-testing", "acceptance-testing"],

            dependencies: ["build-authentication-api"],

            acceptanceCriteria: [
              "Valid credentials are accepted",
              "Invalid credentials are rejected",
              "Authentication errors are handled",
            ],
          },
        ],
      },
      {
        id: "delivery",
        name: "Delivery",
        order: 6,
        requiredCapabilities: [],
        entryConditions: [],
        exitConditions: [],
        taskDefinitions: [],
      },
    ],
  },
];
