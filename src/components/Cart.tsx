import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const cartContext = useContext(CartContext);
  const navigate = useNavigate();

  if (!cartContext) {
    return <p>Loading...</p>; // Handle undefined context
  }

  const { cart, updateQuantity } = cartContext;

  // Calculate total price
  const totalPrice = cart.reduce((sum, item) => sum + item.DiscountedPrice * item.quantity, 0);

  return (
    <div className="p-5 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-5 text-center">Shopping Cart</h1>
      {cart.length === 0 ? (
        <p className="text-center text-gray-600">Your cart is empty.</p>
      ) : (
        <div className="space-y-5">
          {cart.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-5 border p-4 rounded-lg shadow-lg bg-white"
            >
              {/* Product Image */}
              <img
                src={item.image}
                alt={item.title}
                className="w-32 h-32 object-cover rounded-md"
              />

              {/* Product Details */}
              <div className="flex-1">
                <h2 className="text-xl font-semibold">{item.title}</h2>
                <p className="text-gray-600 text-sm line-clamp-2">{item.description}</p>
                <p className="text-lg">
                  <span className="line-through text-gray-500">₹{item.Originalprice}</span>{" "}
                  <span className="text-green-600 font-bold">₹{item.DiscountedPrice}</span>
                </p>
                <p className="text-red-500 text-sm">{item.DiscountPerc}% off</p>

                {/* Quantity Controls */}
                <div className="mt-2 flex items-center gap-3">
                  <button
                    className="px-3 py-1 bg-gray-200 rounded-md cursor-pointer"
                    onClick={() => updateQuantity(item, Math.max(0, item.quantity - 1))}
                  >
                    -
                  </button>
                  <span className="text-lg">{item.quantity}</span>
                  <button
                    className="px-3 py-1 bg-gray-200 rounded-md cursor-pointer"
                    onClick={() => updateQuantity(item, item.quantity + 1)}
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          ))}

          {/* Checkout Section */}
          <div className="mt-5 p-4 border-t flex justify-between items-center">
            <h2 className="text-xl font-semibold">Total: ₹{totalPrice}</h2>
            <button className="bg-[#3C0B04] text-white px-5 py-2 rounded-md cursor-pointer" onClick={()=>navigate("/checkout")}>
              Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
