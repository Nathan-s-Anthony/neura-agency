import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
  BrowserRouter,
  createBrowserRouter,
  Route,
  RouterProvider,
  useNavigation,
} from "react-router";

import "./index.css";
import App from "./App.tsx";
import { Routes } from "react-router";
import { Contact } from "lucide-react";
import { Project } from "../../src/brain/project/project.ts";
import Dashboard from "./components/dashboard.tsx";
import DashboardLayout from "./components/layout.tsx";
import ProjectsPage from "./pages/projectPages.tsx";
import AgentsPage from "./pages/agentsPage.tsx";
import DashboardPage from "./pages/dashboardPage.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello World</div>,
  },
  {
    path: "/projects",
    element: <div>Hello World</div>,
  },
  {
    path: "/agents",
    element: <div>test</div>,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DashboardLayout />}>
          <Route path="dashboard" element={<DashboardPage />} />
          <Route path="projects" element={<ProjectsPage />} />
          <Route path="agents" element={<AgentsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
