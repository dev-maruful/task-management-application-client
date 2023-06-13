import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home";
import TaskLists from "../pages/TaskLists";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "tasklists",
        element: <TaskLists></TaskLists>,
      },
    ],
  },
]);

export default router;
