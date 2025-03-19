import Razorpay from "razorpay";
import dotenv from "dotenv";
import express from "express";

const router = express.Router();

dotenv.config();

const razorpay = new Razorpay({
  key_id: process.env.KEY_ID,
  key_secret: process.env.KEY_SECRET,
});

const upiRegex = /^[a-zA-Z0-9.\-_]{2,256}@[a-zA-Z]{2,64}$/;

function validateUPI(upiId) {
  return upiRegex.test(upiId);
}

// // Test cases
// console.log(validateUPI("999955551@ibl")); // ✅ true
// console.log(validateUPI("user.name@okhdfcbank")); // ✅ true
// console.log(validateUPI("test@upi")); // ✅ true
// console.log(validateUPI("wrongupi.com")); // ❌ false
// console.log(validateUPI("@sbi")); // ❌ false
// console.log(validateUPI("user@123")); // ❌ false

router.post("/custom-payment", async (req, res) => {
  try {
    const { amount, paymentMethod, cardDetails = {}, upiId } = req.body;
    console.log(paymentMethod, amount, cardDetails, upiId);

    if (paymentMethod === "Card" || paymentMethod === "Upi") {
      if (
        paymentMethod === "Card" &&
        (!cardDetails.number || !cardDetails.expiry || !cardDetails.cvv)
      ) {
        return res
          .status(400)
          .json({ success: false, message: "Card details are incomplete" });
      }
      if (paymentMethod === "Upi") {
        if(!upiId) return res.status(400).json({ success: false, message: "UPI ID is required" });
        if (!validateUPI(upiId)) {
            return res
            .status(400)
            .json({ success: false, message: "Invalid UPI ID" });
        }
      }

      // Create Razorpay Order
      const order = await razorpay.orders.create({
        amount: amount * 100, // Convert to paise
        currency: "INR",
        receipt: `receipt_${Date.now()}`,
        payment_capture: 1,
      });

      res.json({
        success: true,
        orderId: order.id,
        message: "Proceed with Payment",
      });
    } else {
      return res
        .status(400)
        .json({ success: false, message: "Invalid Payment Method" });
    }
    // Validate Inputs
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

export default router;
