import React from "react";
import { Link } from "react-router-dom";
import OpenPDF from "../components/OpenPDF";

export const HomeLinks = ({ isMobile }) => {
  return (
    <div className="link-container">
      <Link to="/aboutme">
        <div className={isMobile ? "link-mobile" : "link"} id="about-me">
          <p className="link-text">About me</p>
        </div>
      </Link>
      <Link to="/projects">
        <div className={isMobile ? "link-mobile" : "link"} id="projects">
          <p className="link-text">Projects</p>
        </div>
      </Link>
      <OpenPDF isMobile={isMobile} />
    </div>
  );
};
