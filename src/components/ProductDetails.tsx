import { useParams } from "react-router-dom";
import { useContext, useEffect } from "react";
import { CartContext } from "../context/CartContext";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
// import { div } from "framer-motion/client";
import { useState } from "react";
import { motion } from "framer-motion";
import down from "../assets/down-arrow (2).png"

// interface Review{
//   authorName : string 
//   description : string 
//   rating : number
// }

const ProductDetails = () => {
  const { title } = useParams();
  const cartContext = useContext(CartContext);
  const navigate = useNavigate();
  const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(false);

  if (!cartContext) return <p>Loading...</p>;

  const { addToCart, cart, prodImg, updateQuantity } = cartContext;
  const product = prodImg.find((item) => item.title === title);
  if (!product) return <p>Product not found</p>;

  const isInCart = cart.some((item) => item.title === product.title);
  const cartItem = cart.find((item) => item.title === product.title);
  const quantity = cartItem ? cartItem.quantity : 1;

  // const productReviews = reviews[title] || []; // Fetch reviews from context

  const handleAddToCart = () => {
    if (!isInCart) {
      addToCart({ ...product, quantity: 1 });
      toast.success("Added to cart");
    } else {
      return navigate("/cart");
    }
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  return (
    <div className="flex flex-col w-[90%] mx-auto items-center">
      <div className="flex flex-col md:flex-row w-[100%] mx-auto py-[3%] items-center">
        {/* Left: Image */}
        <div className="w-full md:w-1/2">
          <img src={product.image} alt={product.title} className="w-[90%] rounded-xl shadow-lg" />
        </div>

        {/* Right: Details */}
        <div className="w-full md:w-1/2 p-5 md:p-10">
          <h1 className="text-3xl font-bold text-gray-800">{product.title}</h1>

          <p className="text-lg text-gray-600 tracking-normal my-[5%]" style={{ fontFamily: "'Montserrat', sans-serif" }}>{product.shortDesc}</p>

          <div className="mt-3 text-lg">
            <span className="line-through text-gray-500">₹{product.Originalprice}</span>{" "}
            <span className="text-green-600 font-bold text-2xl">₹{product.DiscountedPrice}</span>
          </div>

          <p className="text-red-500 text-sm">{product.DiscountPerc}% off</p>

          <div className="text-lg font-semibold text-gray-600 mt-[2%]" style={{ fontFamily: "'Montserrat', sans-serif" }}>{product.ml}ml</div>

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

          {/* <p className="text-lg text-gray-600 tracking-normal my-[5%]" style={{ fontFamily: "'Montserrat', sans-serif" }}>{product.description}</p> */}

          <button
            onClick={() => setIsDescriptionExpanded(!isDescriptionExpanded)}
            className="mt-5 rounded-md text-lg w-full bg-[#3C0B04]/20 px-[2%] py-[1.5%]"
          >
            {isDescriptionExpanded ? <div className="flex items-center gap-3 w-full justify-between">
                      <span>Hide Description</span>
                      <img src={down} alt="" className="w-[30px] h-[30px] rotate-180"/>
                  </div> : 
            <div className="flex items-center gap-3 w-full justify-between">
              <span>View Description</span>
              <img src={down} alt="" className="w-[30px] h-[30px]"/>
            </div>}
          </button>

          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: isDescriptionExpanded ? "auto" : 0, opacity: isDescriptionExpanded ? 1 : 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="text-lg text-gray-600 tracking-normal my-[5%]" style={{ fontFamily: "'Montserrat', sans-serif" }}>
              {product.description}
            </p>
          </motion.div>

        </div>

      </div>

      {/* Reviews Section */}
      <div className="">
        <div className="my-[5%]">
          <h2 className="text-2xl font-bold text-[#3C0B04] text-center my-[3%]">What They Say About Us ?</h2>
          {product.reviews.length > 0 ? (
            <ul className="mt-4  flex justify-between">
              {product.reviews.map((review, index: number) => (
                <li key={index} className="py-3 border border-black/20 w-[30%] rounded-md px-[2%] shadow-md shadow-black/20">
                  <p className="font-semibold text-gray-700">{review.authorName}</p>
                  <div className="flex text-yellow-500">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <span key={i}>{i < review.rating ? "★" : "☆"}</span>
                    ))}
                  </div>
                  <p className="text-gray-600">{review.description}</p>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-500 mt-2">No reviews yet.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
