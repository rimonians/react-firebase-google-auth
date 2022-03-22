import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import AuthProvider from "./contexts/AuthContext";
import App from "./App";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <App />
      <ToastContainer position="bottom-right" autoClose={5000} />
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
