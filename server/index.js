import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";

import connection from "./config/db.js";
import userRoutes from "./routes/userRoutes.js";
import productRoutes from "./routes/productRoutes.js";

import { notFound, errorHandler } from "./middleware/errorMiddleware.js";

dotenv.config();
connection();

const app = express();
const port = 5000;

app.use(bodyParser.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("API running!");
});

app.use("/api/users", userRoutes);
app.use("/api/products", productRoutes);

// custom error handling
app.use(notFound);
app.use(errorHandler);

app.listen(port, console.log(`Server running on port ${port}...`));
