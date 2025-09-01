import {Request, Response } from "express";
import Product from "../models/productModel";

export const createProduct = async (req: Request, res: Response) => {
    try {
        const product = await Product.create(req.body);        
        res.status(200).json(product);
    } catch(ex) {
        res.status(500).json({ error: ex });
    }
};

export const deleteProduct = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;

        const product = await Product.findByIdAndDelete(id);
        if(!product) return res.status(404).json({ error: "Skill issue" });

        res.status(200).json({message: "Producto eliminado"});
    } catch(ex) {
        res.status(500).json({ error: ex });
    }
};

export const updateProduct = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;

        const product = await Product.findByIdAndUpdate(id, req.body, { new: true });
        if(!product) return res.status(404).json({ error: "Producto no encontrado" });

        res.status(200).json(product);
    } catch(ex) {
        res.status(500).json({ error: ex });
    }
};

export const getProduct = async (req: Request, res: Response) => {
    try {
        const product = await Product.findById(req.params.id);
        res.status(200).json(product);
    } catch(ex) {
        res.status(500).json({ error: ex });
    }
};

export const getProducts = async (req: Request, res: Response) => {
    try {
        const products = await Product.find();
        res.status(200).json(products);
    } catch(ex) {
        res.status(500).json({ error: ex });
    }
};