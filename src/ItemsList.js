import React, { useState, useContext } from 'react';
import Item from './Item';
import { ItemContext } from './ItemContext';

const ItemsList = () => {
  const [items, setItems] = useContext(ItemContext);

  return (
    <div className="items-list">
      {items.map(item => (
        <Item name={item.name} amount={item.amount} key={item.id} />
      ))}
    </div> 
   );
}
 
export default ItemsList;