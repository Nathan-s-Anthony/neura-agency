export interface Approval {
  id: string;
  projectId: string;
  action: string;
  requestedBy: string;
  status: ApprovalStatus;
  reason: string;
  decidedBy?: string;
  decidedAt?: Date;
}
type ApprovalStatus = "pending" | "approved" | "rejected";
