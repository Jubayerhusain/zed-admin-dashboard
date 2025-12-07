import { createBrowserRouter } from "react-router-dom";
import AdminLayout from "../Dashboard/AdminLayout";
import Dashboard from "../Pages/Dashboard";
import Analytics from "../Pages/Analytics";
import Review from "../Pages/Review";

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
      },
      {
        path: "admin/review",
        element: <Review />
      }
    ]
  },
]);

export default router;
