import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons";

const GoRight = ({
  curentCardsList,
  addToCurent,
  goToLast,
  cards,
  children
}) => {
  return (
    <>
      <span
        className={`button ${
          curentCardsList === cards.length - 1 ? "colorgrey" : ""
        }`}
        onClick={addToCurent}
      >
        {children}
      </span>
      <span
        className={`button ${
          curentCardsList >= cards.length - 2 ? "colorgrey" : ""
        }`}
        onClick={goToLast}
      >
        <FontAwesomeIcon icon={faAngleDoubleRight} />
      </span>
    </>
  );
};

export default GoRight;
