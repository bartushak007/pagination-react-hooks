import React from "react";

const PageItem = ({
  curentCardsList,
  setCurentCardsList,
  i,
  showElements = 2
}) => {
  return (
    <>
      <span
        className={`pageNum ${curentCardsList === i ? "colorred" : ""}`}
        hidden={
          !(
            (i <= curentCardsList + showElements &&
              i >= curentCardsList - showElements) ||
            i === curentCardsList
          )
        }
        onClick={() => setCurentCardsList(i)}
        key={i}
      >
        {i}
      </span>
    </>
  );
};

export default PageItem;
