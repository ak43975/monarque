import toast from "react-hot-toast";
import { CartContext } from "../context/CartContext";
import { useContext } from "react";

interface ProductsCardProps {
  imageLink: string;
  title: string;
  desc: string;
  Originalprice: number;
  DiscountedPrice: number;
  DiscountPerc: number;
}

const ProductsCard: React.FC<ProductsCardProps> = ({
  imageLink,
  title,
  desc,
  Originalprice,
  DiscountedPrice,
  DiscountPerc,
}) => {

  const cartContext = useContext(CartContext);

  if (!cartContext) {
    return null; // Handle case where context is undefined
  }

  const { addToCart, cart } = cartContext;

  const isInCart = cart.some((item) => item.title === title)

  const handleAddToCart = () => {
    const product = {
      image: imageLink,
      title,
      description: desc,
      Originalprice,
      DiscountedPrice,
      DiscountPerc,
    };

    if (!isInCart) {
      addToCart(product);
      toast.success("Added to cart")
    }
  };

  return (

    <div className="w-[30%] my-[3%]">
      <img src={imageLink} alt="" className="w-[100%] rounded-t-xl" />

      <div className="mt-[4%]">
        {/* title */}
        <h2 className="text-xl font-semibold">{title}</h2>
        {/* <p className="text-gray-600 text-sm line-clamp-2">{item.description}</p> */}
        <p className="text-lg">
          <span className="line-through text-gray-500">₹{Originalprice}</span>{" "}
          <span className="text-green-600 font-bold">₹{DiscountedPrice}</span>
        </p>
        <p className="text-red-500 text-sm">{DiscountPerc}% off</p>
      </div>

      <div>
        <button
          onClick={handleAddToCart}
          disabled={isInCart}
          className={`w-[100%] text-[21px] py-[1%] rounded-md mt-[5%] cursor-pointer transition-all duration-200 ${isInCart ? "bg-[#3C0B04]/50 cursor-not-allowed" : "bg-[#3C0B04] text-white hover:scale-[99%]"
            }`}>
          {
            isInCart ? "Added" : "Add to Cart"
          }
        </button>
      </div>
    </div>

  )
}

export default ProductsCard