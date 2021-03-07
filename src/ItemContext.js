import React, { useState, createContext } from 'react';

export const ItemContext = createContext();

export const ItemProvider = (props) => {
  const [items, setItems] = useState([
    {
      name: "Red Beans",
      amount: 23,
      id: 1
    },
    {
      name: "Nuts for Bunnies",
      amount: 33,
      id: 2
    },
    {
      name: "Chopped Tomatoes",
      amount: 2,
      id: 3
    }
]);
  return ( 
      <ItemContext.Provider value={[items, setItems]} >
        {props.children}
      </ItemContext.Provider>
   );
}