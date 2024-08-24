import express from "express"
import dotenv from "dotenv"
import { connectToMongo } from "./db/connectToMongo.js"
import authRoutes from "./routes/authRoutes.js"

const app=express();
dotenv.config();

app.use("/api/auth", authRoutes)

app.listen(5000,()=>{
    console.log("server running on port:"+process.env.PORT);
    connectToMongo();

});