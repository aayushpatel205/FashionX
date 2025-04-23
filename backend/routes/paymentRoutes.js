import axios from "axios";
import express from "express";
import sha256 from "sha256";
import uniqid from "uniqid";

const router = express.Router();

const MERCHANT_ID = "PGTESTPAYUAT86";
const PHONE_PE_HOST_URL = "https://api-preprod.phonepe.com/apis/pg-sandbox";
const SALT_INDEX = 1;
const SALT_KEY = "96434309-7796-489d-8924-ab56988a6076";
const APP_BE_URL = "http://localhost:5173";



router.get("/pay", async function (req, res, next) {
 // Initiate a payment

 // Transaction amount
 const amount = 100;

 // User ID is the ID of the user present in our application DB
 let userId = "MUID123";

 // Generate a unique merchant transaction ID for each transaction
 let merchantTransactionId = uniqid();

 let normalPayLoad = {
   merchantId: MERCHANT_ID,
   merchantTransactionId: merchantTransactionId,
   merchantUserId: userId,
   amount: amount * 100, // converting to paise
   redirectUrl: `${APP_BE_URL}/payment/status/${merchantTransactionId}`,
   redirectMode: "REDIRECT",
   mobileNumber: "9999999999",
   paymentInstrument: {
     type: "PAY_PAGE",
   },
 };

 // Make a base64-encoded payload
 let bufferObj = Buffer.from(JSON.stringify(normalPayLoad), "utf8");
 let base64EncodedPayload = bufferObj.toString("base64");

 // X-VERIFY => SHA256(base64EncodedPayload + "/pg/v1/pay" + SALT_KEY) + ### + SALT_INDEX
 let string = base64EncodedPayload + "/pg/v1/pay" + SALT_KEY;
 let sha256_val = sha256(string);
 let xVerifyChecksum = sha256_val + "###" + SALT_INDEX;

   axios.post(
   `${PHONE_PE_HOST_URL}/pg/v1/pay`,
   { request: base64EncodedPayload },
   {
     headers: {
       "Content-Type": "application/json",
       "X-VERIFY": xVerifyChecksum,
       accept: "application/json",
     },
   }
 )
 .then(function (response) {
   console.log("response->", response.data);
   const url = response.data.data.instrumentResponse.redirectInfo.url;
   console.log("Redirect Info:", url);

   res.json({ data: response.data.data});
 })
 .catch(function (error) {
   res.send(error);
 });
});


router.get("/validate/:merchantTransactionId", async function (req, res) {
  const { merchantTransactionId } = req.params;
  console.log("merchantTransactionId->", merchantTransactionId);
 
  if (merchantTransactionId) {
    let statusUrl =
      `${PHONE_PE_HOST_URL}/pg/v1/status/${MERCHANT_ID}/` +
      merchantTransactionId;
 
    let string =
      `/pg/v1/status/${MERCHANT_ID}/` +
      merchantTransactionId +
      SALT_KEY;
    let sha256_val = sha256(string);
    let xVerifyChecksum = sha256_val + "###" + SALT_INDEX;
 
    axios
      .get(statusUrl, {
        headers: {
          "Content-Type": "application/json",
          "X-VERIFY": xVerifyChecksum,
          "X-MERCHANT-ID": merchantTransactionId,
          accept: "application/json",
        },
      })
      .then(function (response) {
        console.log('response->', response.data);
        if (response.data && response.data.code === "PAYMENT_SUCCESS") {
          // redirect to FE payment success status page
          res.send(response.data);
        } else {
          // redirect to FE payment failure / pending status page
          res.send(response.data);
        }
      })
      .catch(function (error) {
        // redirect to FE payment failure / pending status page
        res.send(error);
      });
  } else {
    res.send("Sorry!! Error");
  }
 });

export default router;