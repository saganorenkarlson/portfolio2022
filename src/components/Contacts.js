import { React, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

export const Contacts = () => {
    const [copySuccess, setCopySuccess] = useState(false);
  const email = "saga.norenkarlson@gmail.com";

  const copyToClipBoard = () => {
    navigator.clipboard.writeText(email);
    setCopySuccess(true);

    setTimeout(() => {
        setCopySuccess(false)
      }, 1000);
  };

  return (
    <div className="contact">
      <p>Contact me:</p>
      <button
        className="contact-item"
        title="Copy to clipboard"
        onClick={copyToClipBoard}
      >
        <FontAwesomeIcon className="contact-icons" icon={faEnvelope} />
        <p>&nbsp; saga.norenkarlson@gmail.com</p>
        {copySuccess ? <span>Copied</span> : null}
      </button>
      <div className="contact-item">
        <FontAwesomeIcon className="contact-icons" icon={faPhone} />
        <p>&nbsp; +46 73 060 93 60</p>
      </div>
      <div className="contact-item">
        <FontAwesomeIcon className="contact-icons" icon={faLinkedin} />
        <a
          className="linkedin-link"
          href="https://www.linkedin.com/in/saga-nor%C3%A9n-karlson-457827164/"
        >
          &nbsp; LinkedIn
        </a>{" "}
      </div>
    </div>
  );
};
