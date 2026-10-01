import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import productsRouter from "./routes/products.js";
import {connectDB}from "./utils/DB.js"
import dns from "node:dns/promises";
dns.setServers(["1.1.1.1","8.8.8.8"]);
dotenv.config();
const app=express();
const PORT=5050;
app.use(cors());
app.use(express.json());

app.use("/products",productsRouter);
connectDB().then(()=>{
app.listen(PORT,()=>{
    console.log("Server is running on PORT 5050");
});
});