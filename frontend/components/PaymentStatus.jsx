// PaymentStatus.js
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const PaymentStatus = () => {
  const [status, setStatus] = useState("Checking...");
  const [transactionId, setTransactionId] = useState("");

  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const merchantTransactionId = id;

    setTransactionId(merchantTransactionId);

    // Optionally double-check from backend
    const checkStatus = async () => {
      try {
        const res = await axios.get(
          `http://localhost:8002/payment/validate/${id}`
        );
        console.log(res);
        setStatus(res?.data.code);
      } catch (error) {
        console.error("Error checking status:", error);
        setStatus("FAILED");
      }
    };

    if (id) {
      checkStatus();
    } else {
      setStatus("Transaction ID not found.");
    }
  }, []);

  return (
    <div className="p-6 text-center">
      <h2 className="text-xl font-bold mb-4">Payment Status</h2>
      <p>Transaction ID: {transactionId}</p>
      {status === "PAYMENT_SUCCESS" && (
        <p className="text-green-600">✅ Payment Successful</p>
      )}
      {status === "PAYMENT_PENDING" && (
        <p className="text-yellow-600">⏳ Payment Pending</p>
      )}
      {status === "PAYMENT_ERROR" ||
        (status === "FAILED" && (
          <p className="text-red-600">❌ Payment Failed</p>
        ))}
      {status === "Checking..." && <p>Checking payment status...</p>}
    </div>
  );
};

export default PaymentStatus;
