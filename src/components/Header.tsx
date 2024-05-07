import Button from "./Button";
import { useCartDispatch, useCartSelector } from "../store/hooks";
import { openModal } from "../store/modal-slice";
import Cart from "./Cart";

const Header = () => {
  const cartQuantity = useCartSelector((state) =>
    state.cart.items.reduce((val, item) => val + item.quantity, 0)
  );
  const modalState = useCartSelector((state) => state.modal.isOpen);
  const dispatch = useCartDispatch();

  return (
    <>
      {modalState && <Cart />}
      <header className="bg-neutral-800 text-white p-5 flex justify-between items-center font-medium">
        <p>Cart Logo</p>
        <Button onClick={() => dispatch(openModal("cart"))}>
          Cart ({cartQuantity})
        </Button>
      </header>
    </>
  );
};
export default Header;
