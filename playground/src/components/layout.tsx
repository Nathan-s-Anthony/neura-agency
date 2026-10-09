import Aside from "./aside";
import Dashboard from "./dashboard";

export default function DashboardLayout() {
  return (
    <div className="relative">
      <Aside />
      <Dashboard />
    </div>
  );
}
