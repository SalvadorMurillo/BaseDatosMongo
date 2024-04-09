import app from "./app.js";
import { connectDB } from "./config/db.js";

connectDB();
app.listen(3000);
console.log("Up");




/* import mongoose from "mongoose";
import path  from "path";
import express from "express";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import cors from "cors";
import authRoute from "./routes/auth.route.js";
import productRoute from "./routes/product.route.js";
import supplierRoute from "./routes/supplier.route.js";

const MONGO_URL = "mongodb://localhost:27017/login";

mongoose.connect(MONGO_URL)
.then(() => {
    console.log('MongoDb is connected');
  })
  .catch((err) => {
    console.log(err);
  });
const __dirname = path.resolve();

const app = express();

app.use(morgan("dev"));
app.use(express.json());
app.use(express.static(path.join(__dirname, '/frontend/dist')));
app.use(express.urlencoded({ extended: true }));
app.listen(3003, () => {
    console.log('Server is running on port 3002!');
  });
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:5173",
    // preflightContinue: true,
    credentials: true,
  })
);
app.use("/api/auth", authRoute);
app.use("/api/products", productRoute);
app.use("/api/suppliers", supplierRoute);


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'frontend', 'dist', 'index.html'));
  });
  */






  








