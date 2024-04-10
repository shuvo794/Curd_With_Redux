import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Components/Home/Home";
import Creates from "../Components/Home/Creates";
import Read from "../Components/Read";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/create",
        element: <Creates></Creates>,
      },
      {
        path: "/read",
        element: <Read></Read>,
      },
    ],
  },
]);
