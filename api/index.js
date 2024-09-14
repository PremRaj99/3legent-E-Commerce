import cookieParser from "cookie-parser";
import express from "express";
import dotenv from "dotenv";
import connectToMongo from "./db/connectWithMongo.js";
import cors from "cors";

// all router imports
import authRouter from "./routers/auth.route.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cookieParser());
app.use(cors());

// define all routers
app.use("/api/auth", authRouter);

app.get("/", (req, res) => {
  res.send("Hello Backend");
});

app.listen(port, () => {
  connectToMongo();
  console.log("server is running on port: " + port);
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
