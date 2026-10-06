export interface Decision {
  id: string;
  projectId: string;
  title: string;
  context: string;
  decision: string;
  madeBy: string;
  alternatives?: string[];
  createdAt: Date;
}
