import { CartItem, addToCart, removeFromCart } from "../store/cart-slice";
import { useCartDispatch } from "../store/hooks";

const CartItems = ({ id, price, quantity, title }: CartItem) => {
  const dispatch = useCartDispatch();

  const itemsTotalPrice = price * quantity;

  return (
    <div className="flex item justify-between p-3 border-[1px] rounded-lg">
      <div>
        <h3>{title}</h3>
        <p>${itemsTotalPrice.toLocaleString()}</p>
      </div>
      <div className="space-y-2">
        <h3>Quantity: {quantity}</h3>
        <div className="space-x-2">
          <button
            onClick={() => dispatch(removeFromCart(id))}
            className=" px-2  rounded-lg border-[1px] min-w-9"
          >
            -
          </button>
          <button
            onClick={() =>
              dispatch(addToCart({ id: id, price: price, title: title }))
            }
            className=" px-2  rounded-lg border-[1px] min-w-9"
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};
export default CartItems;
