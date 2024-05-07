import { addToCart, removeFromCart } from "../store/cart-slice";
import { useCartDispatch } from "../store/hooks";

type Props = {
  id: string;
  title: string;
  price: number;
  quantity: number;
};

const CartItems = ({ id, price, quantity, title }: Props) => {
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
