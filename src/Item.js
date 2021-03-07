import React from 'react';

const Item = ({name, amount}) => {

  return (
    <div>
      <h3>{name}</h3>
      <p>{amount}</p>
    </div> 
   );
}
 
export default Item;