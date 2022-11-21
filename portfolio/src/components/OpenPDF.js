import React from "react";
import Pdf from "./cv_SagaNorénKarlson_.pdf";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

const OpenPDF = ({ isMobile }) => {
  return (
    <a href={Pdf} target="_blank">
      <div className={isMobile ? "link-mobile" : "link"} id="cv">
        <p className="link-text">Read my CV</p>
        <FontAwesomeIcon className="open-pdf" icon={faArrowUpRightFromSquare} />
      </div>
    </a>
  );
};

export default OpenPDF;
