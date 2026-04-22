import React from "react";

function CartItem({ item, onIncrease, onDecrease }) {
  return (
    <div>
      <h3>{item.name}</h3>
      <p>Price: ${item.price}</p>
      <p>Quantity: {item.quantity}</p>

      <button onClick={onIncrease}>+</button>
      <button onClick={onDecrease}>-</button>

      <p>Total: ${item.price * item.quantity}</p>
    </div>
  );
}

export default CartItem;
