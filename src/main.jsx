import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import Routes from "./Routes/Routes";
import AuthProvider from "./Providers/AuthProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <div className="mx-auto max-w-7xl">
    <React.StrictMode>
      <AuthProvider>
        <RouterProvider router={Routes} />
      </AuthProvider>
    </React.StrictMode>
  </div>,
);
