import { createBrowserRouter } from "react-router-dom";
import AdminLayout from "../Dashboard/AdminLayout";
import Dashboard from "../Pages/Dashboard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AdminLayout />,
    children: [
      {
        index: true,
        element: <Dashboard />
      }
    ]
  },
]);

export default router;
