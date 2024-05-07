import { createPortal } from "react-dom";
import { useCartDispatch, useCartSelector } from "../store/hooks";
import { closeModal } from "../store/modal-slice";
import CartItems from "./CartItems";

const Cart = () => {
  const dispatch = useCartDispatch();
  const cartItems = useCartSelector((state) => state.cart.items);
  const total = cartItems.reduce(
    (val, item) => val + item.quantity * item.price,
    0
  );
  console.log(total);
  return createPortal(
    <>
      <div
        onClick={() => dispatch(closeModal())}
        className="h-screen w-screen backdrop-blur-md fixed bg-neutral-900/10"
      ></div>
      <div className=" -translate-x-1/2 -translate-y-1/3 top-1/3 left-1/2 fixed bg-yellow-800 p-5 rounded-2xl text-white w-1/2 space-y-2">
        <h2 className=" pb-2">Cart</h2>
        {cartItems.length > 0 ? (
          <>
            {cartItems.map((item) => (
              <CartItems key={item.id} {...item} />
            ))}
          </>
        ) : (
          "No items in the cart"
        )}
        <p className="float-right p-1">Total: ${total.toLocaleString()}</p>
      </div>
    </>,
    document.getElementById("modal")!
  );
};
export default Cart;
