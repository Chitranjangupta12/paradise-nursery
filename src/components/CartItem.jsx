import React from "react";

function CartItem({ item, onRemove }) {
  return (
    <div style={{ border: "1px solid gray", margin: "10px", padding: "10px" }}>
      <h3>{item.name}</h3>
      <p>Price: ${item.price}</p>
      <p>Quantity: {item.quantity}</p>
      <button onClick={onRemove}>Remove</button>
    </div>
  );
}

export default CartItem;
