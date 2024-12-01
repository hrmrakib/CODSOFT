import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import HomePage from "../pages/HomePage";
import JobListingsPage from "../pages/JobListingsPage";
import JobDetailPage from "../pages/JobDetailPage";
import EmployerDashboard from "../pages/EmployerDashboard";
import CandidateDashboard from "../pages/CandidateDashboard";
import JobApplicationPage from "../pages/JobApplicationPage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/jobs",
        element: <JobListingsPage />,
      },
      {
        path: "/job/:id",
        element: <JobDetailPage />,
      },
      {
        path: "/employer/dashboard",
        element: <EmployerDashboard />,
      },
      {
        path: "/candidate/dashboard",
        element: <CandidateDashboard />,
      },
      {
        path: "/apply/:id",
        element: <JobApplicationPage />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/register",
        element: <RegisterPage />,
      },
    ],
  },
]);

export default router;
