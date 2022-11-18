import React from "react";
import { Link } from "react-router-dom";
import OpenPDF from "../components/OpenPDF";

export const HomeLinks = () => {
  return (
    <div className="link-container">
      <Link to="/aboutme">
        <div className="link" id="about-me">
          <p className="link-text">About me</p>
        </div>
      </Link>
      <Link to="/projects">
        <div className="link" id="projects">
          <p className="link-text">Projects</p>
        </div>
      </Link>
      <OpenPDF />{" "}
    </div>
  );
};
