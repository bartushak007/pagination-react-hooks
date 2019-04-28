import { useEffect, useState } from "react";

const usePagination = (amountCards = 5) => {
  const [cards, setCards] = useState([]);
  const [curentCardsList, setCurentCardsList] = useState(0);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos?albumId=1")
      .then(response => response.json())
      .then(arr => {
        const arrOfPages = (amountCards, arr) => {
          const length = Math.ceil(arr.length / amountCards);
          return Array.from(new Array(length), (elem, i) =>
            arr.slice(i * amountCards, i * amountCards + amountCards)
          );
        };

        setCards(arrOfPages(amountCards, arr));
      });
  }, []);

  const subtractToCurent = () =>
    curentCardsList && setCurentCardsList(curentCardsList - 1);

  const goToFirst = () => setCurentCardsList(0);

  const addToCurent = () =>
    curentCardsList < cards.length - 1 &&
    setCurentCardsList(curentCardsList + 1);

  const goToLast = () => setCurentCardsList(cards.length - 1);

  return {
    subtractToCurent,
    goToFirst,
    addToCurent,
    goToLast,
    curentCardsList,
    cards,
    setCurentCardsList
  };
};

export default usePagination;
