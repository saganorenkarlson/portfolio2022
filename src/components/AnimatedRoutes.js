import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import AboutMe from "../pages/AboutMe";
import Home from "../pages/Home";
import ProjectPage from "../pages/ProjectPage";
import { AnimatePresence } from "framer-motion";
//Avoid keeping position when navigation to new page
import ScrollToTop from "./ScrollToTop";

export const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/aboutme"
          element={
            <>
              <ScrollToTop />
              <AboutMe />
            </>
          }
        />
        <Route
          path="/projects"
          element={
            <>
              <ScrollToTop />
              <ProjectPage />
            </>
          }
        />
        <Route
          path="/"
          element={
            <>
              <ScrollToTop />
              <Home />
            </>
          }
        />
      </Routes>
    </AnimatePresence>
  );
};
