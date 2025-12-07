import { createBrowserRouter } from "react-router-dom";
import AdminLayout from "../Dashboard/AdminLayout";
import Dashboard from "../Pages/Dashboard";
import Analytics from "../Pages/Analytics";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AdminLayout />,
    children: [
      {
        index: true,
        element: <Dashboard />
      },
      {
        path: "admin/analytics",
        element: <Analytics />
      }
    ]
  },
]);

export default router;
