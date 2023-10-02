import express from "express";
import mongoose from "mongoose";
import router from "./route/route.js";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
dotenv.config();
import cors from "cors";
const app = express();
app.use(cookieParser());

app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 8000;

const URL = process.env.MONGODB_URI;
mongoose
  .connect(URL)
  .then(() => {
    console.log("Database Connected...");
  })
  .catch((err) => {
    console.log("Connection Error in database...");
  });

app.use("/api/v1", router);

//
app.use("/*", (req, res) => {
  res.send("Page Not Found");
});

app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});
