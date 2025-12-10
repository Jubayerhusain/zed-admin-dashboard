import { createBrowserRouter } from "react-router-dom";
import AdminLayout from "../Dashboard/AdminLayout";
import Dashboard from "../Pages/Dashboard";
import Analytics from "../Pages/Analytics";
import Review from "../Pages/Review";
import OrderList from "../Pages/OrderList";
import Customer from "../Pages/Customer";
import Agent from "../Pages/Agent";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AdminLayout />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "admin/analytics",
        element: <Analytics />,
      },
      {
        path: "admin/review",
        element: <Review />,
      },
      {
        path: "admin/order-list",
        element: <OrderList />,
      },
      {
        path: "admin/customer",
        element: <Customer />,
      },

      // Agent Route
      {
        path: "admin/add-agent",
        element: <Agent />,
      },
    ],
  },
]);

export default router;
