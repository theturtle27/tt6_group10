import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import { errorHandler } from "./middlewares/errorMiddleware.js";
import { userRoutes } from "./routes/userRoutes.js";

// Set up express
const app = express();

// For the front end to request from the backend
app.use(
  cors({
    credentials: true,
    origin: ["http://localhost:3000"],
  })
);

// Used to parse JSON bodies
app.use(express.json());

// Used for form submission
app.use(express.urlencoded({ extended: false }));

app.use("/api/users", userRoutes);
// app.use("/api/wallets", walletRoutes);
// app.use("/api/transactions/", transactionRoutes);
// app.use("/api/currencies/", currenceiesRoutes);
// app.use("/api/exchangeRates/", exchangeRateRoutes);

// Handling errors for unsupported routes
app.use((req, res, next) => {
  res.status(404);
  return next(new Error("Could not find this route"));
});

// Error-handling middleware
app.use(errorHandler);

const port = 5000;
app.listen(port);
console.log(`Server running on ${port} with mongodb connected`);
