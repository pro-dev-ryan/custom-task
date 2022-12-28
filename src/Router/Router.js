import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Login from "../Pages/Authentication/Login/Login";
import SignUp from "../Pages/Authentication/SignUp/SignUp";
import Home from "../Pages/Home/Home";
import AddTask from "../Pages/Tasks/Add Task/AddTask";
import CompletedTask from "../Pages/Tasks/Done Task/CompletedTask";
import MyTasks from "../Pages/Tasks/Show Tasks/MyTasks";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/add-task",
        element: <AddTask />,
      },
      {
        path: "/my-task",
        element: <MyTasks />,
      },
      {
        path: "/done-task",
        element: <CompletedTask />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
    ],
  },
]);
