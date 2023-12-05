import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";

// Об'єкт для виводу
const root = document.querySelector("#root") ? document.querySelector("#root") : document.querySelector(".wrapper");

// Main rendering
ReactDOM.createRoot(root).render(
   <React.StrictMode>
      <BrowserRouter>
         <App />
      </BrowserRouter>
   </React.StrictMode>
);
