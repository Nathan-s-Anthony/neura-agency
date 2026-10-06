export interface TaskDefinition {
  id: string;
  title: string;
  description: string;
  requiredCapabilities: string[];
  dependencies: string[];
  acceptanceCriteria: string[];
}
