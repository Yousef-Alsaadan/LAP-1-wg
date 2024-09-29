import { createBrowserRouter, RouterProvider } from "react-router-dom";

import ErrorPage from "./pages/ErrorPage";

import Home from "./pages/Home";
import Logs from "./components/Logs";
import Info from "./pages/Info";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/logs",
    element: <Logs />,
  },
  {
    path: "/info",
    element: <Info />,
  },
]);

function Router() {
  return <RouterProvider router={router} />;
}

export default Router;
