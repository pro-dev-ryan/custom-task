import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Login from "../Pages/Authentication/Login/Login";
import SignUp from "../Pages/Authentication/SignUp/SignUp";
import Home from "../Pages/Home/Home";
import AddTask from "../Pages/Tasks/Add Task/AddTask";
import CompletedTask from "../Pages/Tasks/Done Task/CompletedTask";
import MyTasks from "../Pages/Tasks/Show Tasks/MyTasks";
import PrivateRoutes from "./Private Routes/PrivateRoutes";

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
        path: "/my-task/:email",
        loader: ({ params }) => {
          return fetch(
            `https://task-app-server-lyart.vercel.app/getpost/${params.email}`
          );
        },
        element: (
          <PrivateRoutes>
            <MyTasks />
          </PrivateRoutes>
        ),
      },
      {
        path: "/done-task",
        loader: () => fetch("https://task-app-server-lyart.vercel.app/getdone"),
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
