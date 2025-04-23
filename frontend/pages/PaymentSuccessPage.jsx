import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Confetti from "react-confetti";
import { useProductData } from "../src/Context/ProductDataContext";
import { useNavigate } from "react-router-dom";

const PaymentSuccessPage = () => {
  const navigate = useNavigate();
  const [showConfetti, setShowConfetti] = useState(false);
  const { totalCost, setTotalCost } = useProductData();

  useEffect(() => {
    setTotalCost(
      sessionStorage.getItem("totalCost")
        ? JSON.parse(sessionStorage.getItem("totalCost"))
        : 0
    );
  }, []);

  const formatDate = () => {
    const now = new Date(Date.now());
    const options = { day: "numeric", month: "long" }; // 'short' = Apr, 'long' = April
    const formatted = now.toLocaleDateString("en-US", options);
    return formatted;
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    setTimeout(() => {
      setShowConfetti(true);
    }, 2000);
  }, []);

  return (
    <div className="flex justify-center bg-white relative h-dvh">
      {showConfetti && (
        <Confetti
          numberOfPieces={200}
          recycle={false}
          className="absolute inset-0 z-0"
        />
      )}
      <div className="bg-white p-10 shadow-lg text-center relative z-10 w-[32%] h-[57%] mt-20">
        <motion.div
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="flex items-center justify-center w-16 h-16 mx-auto mb-4 border-4 border-green-500 rounded-full"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
          >
            <svg
              className="w-10 h-10 text-green-500"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 13l4 4L19 7"
              ></path>
            </svg>
          </motion.div>
        </motion.div>
        <h2 className="text-2xl font-semibold text-gray-800">
          Payment Successful
        </h2>
        <div className="bg-gray-200 p-4 mt-4 rounded-lg">
          <p className="text-lg text-gray-600">
            Amount: <strong>${totalCost + totalCost * 0.3}</strong>
          </p>
          <p className="text-lg text-gray-600">
            Date: <strong>{formatDate()}</strong>
          </p>
          <p className="text-lg text-gray-600">
            Payment Method: <strong>UPI</strong>
          </p>
        </div>
        <button
          onClick={() => navigate("/")}
          className="w-[50%] mt-5 self-end bg-black h-12 text-white text-sm hover:opacity-85 cursor-pointer uppercase"
        >
          continue shopping
        </button>
      </div>
    </div>
  );
};

export default PaymentSuccessPage;
