import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Day from "./Day.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Important from "./Important.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>
  },
  {
    path: "/day",
    element: <Day/>
  },
  {
    path: "/important",
    element: <Important/>
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>
);
