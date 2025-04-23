// PaymentButton.js
import React, { useState , useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";




// const checkPaymentStatus = async (merchantTransactionId) => {
//   try {
//     const response = await fetch(`http://localhost:8002/payment/validate/${merchantTransactionId}`);
//     const data = await response.json();
//     setStatus(data.code);

//     if (data.code === 'PAYMENT_SUCCESS') {
//       // Optionally redirect or show success
//       console.log('✅ Payment Success');
//     } else {
//       console.log('❌ Payment Failed or Pending');
//     }
//   } catch (error) {
//     console.error('Error checking payment status:', error);
//   }
// };

const PaymentButton = () => {
  const navigate = useNavigate();
  const [merchantTransactionId, setMerchantTransactionId] = useState("");

  
  const handlePayment = async () => {
    try {
      const response = await axios.get("http://localhost:8002/payment/pay");
      console.log("HIIIIT3IT");
      // console.log("redirectUrl: ", response.data);
      const { data } = response.data;
      console.log(data);
      window.location.href = data.instrumentResponse.redirectInfo.url;
       // Redirect to PhonePe payment page
    } catch (error) {
      console.error("Payment initiation failed:", error);
    }
  };

  return <button onClick={handlePayment}>Pay ₹100</button>;
};

export default PaymentButton;
