import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import FireContext from "./Context/FireContext";
import { ToastContainer } from "react-toast";
import ContextTasks from "./Context/ContextTasks";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <FireContext>
      <ContextTasks>
        <App />
      </ContextTasks>
      <ToastContainer position="top-center" />
    </FireContext>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
