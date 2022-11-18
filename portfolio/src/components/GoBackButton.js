import React from 'react'
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

export const GoBackButton = () => {
  return (
    <Link className="go-back-link" to="/">
    <FontAwesomeIcon className="go-back" icon={faArrowLeft} />
  </Link>  )
}
