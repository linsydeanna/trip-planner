import React from 'react';

const Cards = ({ cards }) => {
  return (
    <div>
      {cards.map((card, index) =>
        <div
          key={index}
        >
          {card.cardType} - {card.name}
        </div>
      )}
    </div>
  )
};

export default Cards;
