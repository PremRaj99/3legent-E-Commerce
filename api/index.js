import cookieParser from "cookie-parser";
import express from "express";
import dotenv from "dotenv";
import connectToMongo from "./db/connectWithMongo.js";
import cors from "cors";

// all router imports
import authRouter from "./routes/auth.route.js";
import productRouter from "./routes/product.route.js";
import cartRouter from './routes/cart.route.js';
import categoryRouter from './routes/category.route.js';
import orderRouter from './routes/order.route.js';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cookieParser());
app.use(cors());

// define all routers
app.use("/api/auth", authRouter);
app.use("/api/product", productRouter);
app.use("/api/cart", cartRouter);
app.use("/api/category", categoryRouter);
app.use("/api/order", orderRouter);

app.get("/", (req, res) => {
  res.send("<h1>※ Server is running ※</h1>");
});

app.listen(port, () => {
  connectToMongo();
  console.log("server is running on port: http://localhost:" + port);
});

// error handle middleware

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "internal server error";

  res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});
