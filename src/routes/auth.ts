import { Router } from "express";
import jwt from "jsonwebtoken";
import User from "../models/userModel";

const router = Router();
const JWT_SECRET = process.env.JWT_SECRET || "silksong_es_clave";

router.post("/register", async (req, res) => {
    try {
        const { userName, email, password } = req.body;
        const user = new User({ userName, email, password});
        await user.save();
        res.status(200).json({ message: "Usuario registrado con exito"});
    } catch (error: any) {
        res.status(400).json({ error: error.message});
    }
});

router.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;
        const user: any = await User.findOne({email});
        if (!user) return res.status(400).json({ error: "Credenciales invalidas"});

        const isMatch = await user.comparePassword(password);
        if (!isMatch) return res.status(400).json({ error: "Credenciales invalidas"});

        const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: "10m"});

        res.json({ token});
    } catch (error: any) {
        res.status(500).json({ error: error.message});
    }
});

export default router;
