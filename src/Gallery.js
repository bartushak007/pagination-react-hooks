import React from "react";
const Gallery = ({ cards, curentCardsList }) => (
  <div className="App">
    {cards.length &&
      cards[curentCardsList].map(({ url, title }) => (
        <img className="img" src={url} key={title} alt={title} />
      ))}
  </div>
);

export default Gallery;
