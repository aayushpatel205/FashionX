import express from "express";
import cors from "cors";
import connectDatabase from "./database/connect.js";

const PORT = 5000;
const app = express();

app.use(express.json());
app.use(cors());

connectDatabase();

app.get("/", (req, res) => {
  const params = req.query;
  return res.send({
    message: "Hello World",
    params
  });
});

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
