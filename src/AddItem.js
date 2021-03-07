import React, { useState, useContext } from 'react';
import { ItemContext } from './ItemContext';

const AddItem = () => {
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');
  const [items, setItems] = useContext(ItemContext);

  const updateName = (e) => {
    setName(e.target.value)
  }

  const updateAmount = (e) => {
    setAmount(e.target.value)
  }

  const addItem = (e) => {
    e.preventDefault();
    setItems(prevItems => [...prevItems, {name: name, amount: amount}])
  }

  return ( 
      <form className="new-item" onSubmit={addItem}>
        <input type="text" name="name" value={name} onChange={updateName} placeholder="Add a new item"/>
        <input type="text" name="amount" value={amount} onChange={updateAmount} placeholder="Amount"/>
        <button>Submit</button>
      </form>
   );
}
 
export default AddItem;
