import { motion } from "framer-motion";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const OrderSuccess = () => {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => navigate("/"), 4000); // Redirect to Home after 3 sec
  }, [navigate]);

  return (
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0.8, opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col justify-center items-center h-screen bg-green-100 text-green-800"
    >
      <motion.div
        initial={{ rotate: -10 }}
        animate={{ rotate: 10 }}
        transition={{ yoyo: Infinity, duration: 1 }}
        className="text-6xl"
      >
        🎉
      </motion.div>
      <h1 className="text-3xl font-bold mt-5">Order Placed Successfully!</h1>
      <p className="text-lg">Your order will be delivered soon.</p>
    </motion.div>
  );
};

export default OrderSuccess;
