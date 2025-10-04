import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import AllLanding from "./Pages/Landing/AllLanding";
import ResearchDetails from "./Details/ResearchDetails"; 
import "./index.css";

import AllDashboard from "./Pages/Dashboard/AllDashboard";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<AllLanding />} />
      <Route path="/AllDashboard" element={<AllDashboard/>} />
      <Route path="/research/:id" element={<ResearchDetails />} />
    </Routes>
  </BrowserRouter>
);
