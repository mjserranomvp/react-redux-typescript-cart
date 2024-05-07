import Button from "./Button";
import { addToCart } from "../store/cart-slice";
import { useCartDispatch } from "../store/hooks";
type ProductProps = {
  id: string;
  image: string;
  title: string;
  price: number;
  description: string;
};

const Product = ({ id, image, title, price, description }: ProductProps) => {
  const dispatch = useCartDispatch();
  const handleAddToCart = () => {
    dispatch(addToCart({ id: id, title: title, price: price }));
  };

  return (
    <div className="min-[200px] bg-yellow-800 rounded-2xl overflow-hidden text-orange-200">
      <img className="max-h-[400px] w-full h-full object-cover" src={image} />
      <div className="p-5 space-y-5">
        <div>
          <h3>{title}</h3>
          <p>${price}</p>
        </div>
        <p className="line-clamp-3 text-white">{description}</p>
        <div className="flex justify-end">
          <Button onClick={handleAddToCart} className="w-32 ">
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
};
export default Product;
