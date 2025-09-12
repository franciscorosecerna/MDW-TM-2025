import express, { NextFunction, Request, Response } from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import userRoutes from "./routes/userRoutes"
import authRoutes from "./routes/auth";
import { authenticateJWT } from "./middlewares/authMiddleware";
import productRoutes from "./routes/productRoutes"

dotenv.config();
const app = express();
const mongoUri = process.env.MONGO_URI!;

app.use(express.json({ limit: "10mb" }));

app.use("/auth", authRoutes);

app.use("/api", authenticateJWT, (router => {
    router.use("/users", userRoutes);
    router.use("/products", productRoutes);
    return router;
})(express.Router()));

const connectToDb = async () => {
    try {
        await mongoose.connect(mongoUri, {
        });
        console.log('MongoDB conectado');

    } catch (error) {
        console.error(`Error de conexion a MongoDB: ${error}`);
    }
}
connectToDb();