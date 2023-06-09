/* eslint-disable no-undef */

import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import SignUP from "../pages/SignUP/SignUP";
import LoadingSpinner from "../loader/LoadingSpinner";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/signup',
        element: <SignUP></SignUP>
      },
      {
        path: 'loader',
        element: <LoadingSpinner />,
      },
    ],
  },
]);

export default router;
