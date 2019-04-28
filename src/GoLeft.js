import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleLeft } from "@fortawesome/free-solid-svg-icons";

const GoLeft = ({ curentCardsList, goToFirst, subtractToCurent, children }) => {
  return (
    <>
      <span
        className={`button ${curentCardsList <= 1 ? "colorgrey" : ""}`}
        onClick={goToFirst}
      >
        <FontAwesomeIcon icon={faAngleDoubleLeft} />
      </span>
      <span
        className={`button ${curentCardsList === 0 ? "colorgrey" : ""}`}
        onClick={subtractToCurent}
      >
        {children}
      </span>
    </>
  );
};

export default GoLeft;
