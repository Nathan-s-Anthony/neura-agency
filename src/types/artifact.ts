export interface Artifact {
  id: string;
  projectId: string;
  type: ArtifactType;
  name: string;
  path: string;
  createdBy: string;
  createdAt: Date;
  updatedAt: Date;
}
type ArtifactType =
  | "brief"
  | "requirement"
  | "architecture"
  | "task"
  | "design"
  | "marketing"
  | "copy"
  | "qa-report"
  | "decision"
  | "documentation";
