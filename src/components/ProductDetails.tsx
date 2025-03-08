import { useParams } from "react-router-dom";
import { useContext, useEffect } from "react";
import { CartContext } from "../context/CartContext";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const ProductDetails = () => {
  const { title } = useParams();
  const cartContext = useContext(CartContext);
  const navigate = useNavigate()

  if (!cartContext) return <p>Loading...</p>;

  const { addToCart, cart, prodImg, updateQuantity } = cartContext;
  const product = prodImg.find((item) => item.title === title);
  if (!product) return <p>Product not found</p>;

  const isInCart = cart.some((item) => item.title === product.title);
  const cartItem = cart.find((item) => item.title === product.title);
  const quantity = cartItem ? cartItem.quantity : 1;

  const handleAddToCart = () => {

    if (!isInCart) {
      addToCart({ ...product, quantity: 1 });
      toast.success("Added to cart");
    }else{
        return navigate("/cart")
    }
  };

  useEffect(()=>{
    window.scrollTo({ top : 0 , behavior : "smooth"})
  })

  return (
    <div className="flex flex-col md:flex-row w-[90%] mx-auto py-[3%] items-center">
      {/* Left: Image */}
      <div className="w-full md:w-1/2">
        <img src={product.image} alt={product.title} className="w-[82%] rounded-xl shadow-lg" />
      </div>

      {/* Right: Details */}
      <div className="w-full md:w-1/2 p-5 md:p-10">
        <h1 className="text-3xl font-bold text-gray-800">{product.title}</h1>
        <p className="text-lg text-gray-600 tracking-normal my-[5%]" style={{ fontFamily: "'Montserrat', sans-serif" }}>{product.description}</p>

        <div className="mt-3 text-lg">
          <span className="line-through text-gray-500">₹{product.Originalprice}</span>{" "}
          <span className="text-green-600 font-bold text-2xl">₹{product.DiscountedPrice}</span>
        </div>
        <p className="text-red-500 text-sm">{product.DiscountPerc}% off</p>

        {/* Quantity Controls */}
        {isInCart && (
          <div className="mt-4 flex items-center gap-3">
            <button
              className="px-4 py-2 bg-gray-200 rounded-md text-lg"
              onClick={() => updateQuantity(product, Math.max(0, quantity - 1))}
            >
              -
            </button>
            <span className="text-lg font-semibold">{quantity}</span>
            <button
              className="px-4 py-2 bg-gray-200 rounded-md text-lg"
              onClick={() => updateQuantity(product, quantity + 1)}
            >
              +
            </button>
          </div>
        )}

        {/* Add to Cart Button */}
        <button
          onClick={handleAddToCart}
          className={`w-full mt-5 py-3 rounded-md text-lg font-semibold transition-all duration-200 text-white ${isInCart ? "bg-[#3C0B04] hover:bg-[#5a0e06] cursor-pointer" : "bg-[#3C0B04] hover:bg-[#5a0e06]"}`}
        >
          {isInCart ? <span>Go To Cart</span> : "Add to Cart"}
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;
