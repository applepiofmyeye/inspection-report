import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import QueryClientContext from "./providers/QueryClientContext";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <QueryClientContext>
      <App />
    </QueryClientContext>
  </React.StrictMode>
);
