import React from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { AnimatedRoutes } from "./components/AnimatedRoutes";

function App() {
  return (
    <div className="body">
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <AnimatedRoutes />
      </BrowserRouter>
    </div>
  );
}

export default App;
