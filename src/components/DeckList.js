import React from 'react';

const DeckList = ({ deck }) => {
    let cardCount = deck.reduce((cardCount, card) => {
      return cardCount + card.count
    }, 0);
  
    return (
      <div id="deck">
        <h3>Your deck so far ({ cardCount } cards):</h3>
        <div className="DeckList">
        {deck.map(card => (
          <p key={ card.id }>
            ({ card.count }x) { card.name }
          </p>
        ))}
        </div>
      </div>
    );
  }
  

export default DeckList;