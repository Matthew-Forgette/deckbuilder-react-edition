import React, { useState } from 'react';
import ReactDOM from 'react-dom';

import './index.css';

import {
  DeckList,
  SearchBar,
  SearchResults
} from './components';

import {
    fetchCards
} from './api';

import axios from 'axios';


const App = () => {
    const [results, setResults] = useState([]);
    const [deck, setDeck] = useState([]);
  
    const addCardToDeck = ({ id, name }) => {
        const newDeck = [...deck];

        const index = newDeck.findIndex((card) => card.id === id);

        if(index > -1) {
            newDeck[index].count = newDeck[index].count + 1;
        } else {
            newDeck.push({ 
                id: id,
                name: name, 
                count: 1
            });
        }
        setDeck(newDeck);
    }
  
    const removeCardFromDeck = ({ id }) => {
        const nextDeck = [...deck];
        const index = nextDeck.findIndex(card => card.id === id);
      
        if (index === -1) {
          return;
        }
      
        if (nextDeck[index].count === 1) {
          nextDeck.splice(index, 1);
        } else {
          nextDeck[index].count -= 1;
        }
      
        setDeck(nextDeck);
    }
  
    return (
      <div id="app">
        <SearchBar setResults={ setResults } />
        <SearchResults 
          results={ results }
          addCardToDeck={ addCardToDeck }
          removeCardFromDeck={ removeCardFromDeck } />
        <DeckList deck={ deck } />
      </div>
    );
  }

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
