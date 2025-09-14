import { Request, Response } from "express";
import Category from "../models/categoryModel";

export const createCategory = async (req: Request, res: Response) => {
  try {
    const category = await Category.create(req.body);
    res.status(201).json(category);
  } catch (ex) {
    res.status(500).json({ error: ex });
  }
};

export const deleteCategory = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const category = await Category.findByIdAndDelete(id);
    if (!category) return res.status(404).json({ error: "Categoria no encontrada" });

    res.status(200).json({ message: "Categoria eliminada" });
  } catch (ex) {
    res.status(500).json({ error: ex });
  }
};

export const updateCategory = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const category = await Category.findByIdAndUpdate(id, req.body, { new: true });
    if (!category) return res.status(404).json({ error: "Categoria no encontrada" });

    res.status(200).json(category);
  } catch (ex) {
    res.status(500).json({ error: ex });
  }
};

export const getCategory = async (req: Request, res: Response) => {
  try {
    const category = await Category.findById(req.params.id);
    if (!category) return res.status(404).json({ error: "Categoria no encontrada" });

    res.status(200).json(category);
  } catch (ex) {
    res.status(500).json({ error: ex });
  }
};

export const getCategories = async (req: Request, res: Response) => {
  try {
    const categories = await Category.find();
    res.status(200).json(categories);
  } catch (ex) {
    res.status(500).json({ error: ex });
  }
};
