import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";

import connection from "./config/db.js";
import userRoutes from "./routes/userRoutes.js";
import products from "./data/products.js";

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

app.get("/api/products", (req, res) => {
  res.json(products);
});

app.get("/api/products/:id", (req, res) => {
  const product = products.find((p) => p._id === req.params.id);
  res.json(product);
});

app.listen(port, console.log(`Server running on port ${port}...`));
