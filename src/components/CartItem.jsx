import { useDispatch } from "react-redux";
import { incrementQuantity, decrementQuantity, removeItem } from "../redux/CartSlice";

function CartItem({ item }) {
  const dispatch = useDispatch();

  return (
    <div>
      <h3>{item.name}</h3>
      <p>Price: ${item.price}</p>

      <button onClick={() => dispatch(decrementQuantity(item.id))}>-</button>
      <span>{item.quantity}</span>
      <button onClick={() => dispatch(incrementQuantity(item.id))}>+</button>

      <p>Total: ${item.price * item.quantity}</p>

      <button onClick={() => dispatch(removeItem(item.id))}>
        Remove
      </button>
    </div>
  );
}

export default CartItem;
