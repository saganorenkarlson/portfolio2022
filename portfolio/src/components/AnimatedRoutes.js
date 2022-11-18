import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import AboutMe from "../pages/AboutMe";
import Home from "../pages/Home";
import ProjectPage from "../pages/ProjectPage";
import {AnimatePresence} from 'framer-motion'

//framer-motion/dist/framer-motion

export const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence exitBeforeEnter>
    <Routes location={location} key={location.pathname}>
      <Route path="/aboutme" element={<AboutMe />} />
      <Route path="/projects" element={<ProjectPage />} />
      <Route path="/" element={<Home />} />
    </Routes>
    </AnimatePresence>
  );
};
