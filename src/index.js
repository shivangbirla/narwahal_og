import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import ContextProvider from "./componenets/Context";
import { Toaster } from "react-hot-toast";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <Router>
    <ContextProvider>
      {/* <Toaster /> */}
      <Toaster
        toastOptions={{
          className: "",
          style: {
            // border: "1px solid #713200",
            padding: "16px",
            fontSize: "16px",
            minHeight: "40px",
            gap: "16px",
            // color: "#713200",
          },
        }}
      />
      <App />
    </ContextProvider>
  </Router>
  // </React.StrictMode>
);
