"use client";

import * as React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
// import "./index.css";

// const rootElement = document.getElementById("root")!;

// document.addEventListener("DOMContentLoaded", () => {
//   createRoot(document.getElementById("root")!).render(
//     <React.StrictMode>
//       <App />
//     </React.StrictMode>
//   );
// });

export default function Page() {
  return (
    <div id="root">
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </div>
  );
}
