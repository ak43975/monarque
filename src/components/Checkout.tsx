// import { useState } from "react";
// import { useNavigate } from "react-router-dom";

// const Checkout = () => {
//   const navigate = useNavigate();

//   // State for user details
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     address: "",
//   });

//   // Handle form input changes
//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   // Handle form submission
//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     //alert("Order Placed Successfully! COD Available.");
//     navigate("/ordersuccess"); // Redirect to home or order summary page
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100">
//       <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full">
//         <h2 className="text-3xl font-bold text-center mb-4 text-[#3C0B04]">Checkout</h2>
//         <form onSubmit={handleSubmit} className="space-y-4">
//           {/* Name Input */}
//           <div>
//             <label className="block font-medium">Full Name</label>
//             <input
//               type="text"
//               name="name"
//               value={formData.name}
//               onChange={handleChange}
//               required
//               className="w-full p-2 border rounded-md"
//             />
//           </div>

//           {/* Email Input */}
//           <div>
//             <label className="block font-medium">Email</label>
//             <input
//               type="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               required
//               className="w-full p-2 border rounded-md"
//             />
//           </div>

//           {/* Phone Number Input */}
//           <div>
//             <label className="block font-medium">Phone Number</label>
//             <input
//               type="tel"
//               name="phone"
//               value={formData.phone}
//               onChange={handleChange}
//               required
//               className="w-full p-2 border rounded-md"
//             />
//           </div>

//           {/* Address Input */}
//           <div>
//             <label className="block font-medium">Address</label>
//             <textarea
//               name="address"
//               value={formData.address}
//               onChange={handleChange}
//               required
//               className="w-full p-2 border rounded-md"
//             />
//           </div>

//           {/* COD Message */}
//           <div className="text-center text-green-600 font-semibold">
//             <p>✅ Cash on Delivery (COD) is Available!</p>
//           </div>

//           {/* Submit Button */}
//           <button
//             type="submit"
//             className="w-full bg-[#3C0B04]/90 text-white p-3 rounded-md hover:bg-[#3C0B04] transition duration-200 cursor-pointer"
//           >
//             Place Order
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Checkout;



import { useContext } from "react";
import { CartContext } from "../context/CartContext";

import { useState } from "react";
import { useNavigate } from "react-router-dom"; 

const Checkout = () => {
  const cartContext = useContext(CartContext);
  const navigate = useNavigate();

  if (!cartContext) {
    throw new Error("CartContext must be used within a CartProvider");
  }
  const { reset } = cartContext;
  
  // State for user details
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  // Handle form input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  

  // AKfycbxNBg546auBwT6B7oYmpTs9PT538zTsPqdfcWFgUKe3lzbUUXS5pVU601L6SFurmrAn

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  
    try {
      console.log(formData);
      const response = await fetch("https://script.google.com/macros/s/AKfycbwCeAZQX6bLeBep2_CnshbVVEg0fZL4r7ugzN7bwGxCPGNKzCraQzrZE8sQjZr8q6NE/exec", {
        redirect: "follow",  // Important to follow redirects
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
            "Content-Type": "text/plain;charset=utf-8",  // Prevents CORS preflight
        },
      })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error(error));

      console.log(response);
      // alert("Order Placed Successfully! COD Available.");
      navigate("/ordersuccess");
      reset();
      // if (response.data.status === "success") {
      //   alert("Order Placed Successfully! COD Available.");
      //   navigate("/ordersuccess");
      // } else {
      //   alert("Failed to place order. Please try again.");
      // }
    } catch (error) {
      alert("Error placing order. Check your internet connection.");
    }
  };

  
  
  

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full">
        <h2 className="text-3xl font-bold text-center mb-4 text-[#3C0B04]">Checkout</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block font-medium">Full Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded-md"
            />
          </div>
          <div>
            <label className="block font-medium">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded-md"
            />
          </div>
          <div>
            <label className="block font-medium">Phone Number</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded-md"
            />
          </div>
          <div>
            <label className="block font-medium">Address</label>
            <textarea
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded-md"
            />
          </div>
          <div className="text-center text-green-600 font-semibold">
            <p>✅ Cash on Delivery (COD) is Available!</p>
          </div>
          <button
            type="submit"
            className="w-full bg-[#3C0B04]/90 text-white p-3 rounded-md hover:bg-[#3C0B04] transition duration-200 cursor-pointer"
          >
            Place Order
          </button>
        </form>
      </div>
    </div>
  );
};

export default Checkout;
