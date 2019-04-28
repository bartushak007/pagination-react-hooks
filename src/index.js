import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import usePagination from "./usePagination";
import Pagination from "./Pagination";
import Gallery from "./Gallery";

function App({ amountCards = 5, children }) {
  const {
    subtractToCurent,
    goToFirst,
    addToCurent,
    goToLast,
    curentCardsList,
    cards,
    setCurentCardsList
  } = usePagination(amountCards);

  const showElements = 3;

  return (
    <>
      <Gallery {...{ cards, curentCardsList }} />
      <Pagination
        {...{
          subtractToCurent,
          goToFirst,
          addToCurent,
          goToLast,
          curentCardsList,
          cards,
          setCurentCardsList
        }}
      >
        <Pagination.GoLeft
          {...{ curentCardsList, goToFirst, subtractToCurent }}
        >
          Prev
        </Pagination.GoLeft>
        {cards.map((elem, i) => (
          <Pagination.PageItem
            {...{ curentCardsList, setCurentCardsList, i, showElements }}
          />
        ))}
        <Pagination.GoRight
          {...{ curentCardsList, addToCurent, goToLast, cards }}
        >
          Next
        </Pagination.GoRight>
      </Pagination>
    </>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
