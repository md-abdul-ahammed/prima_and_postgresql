import { Request, Response } from "express";
import { CategoryService } from "./category.service";

const insertIntoDb = async (req: Request, res: Response) => {
  try {
    const result = await CategoryService.insertIntoDb(req.body);
    res.send({
      success: true,
      message: "Category Created",
      data: result,
    });
  } catch (err) {
    res.send(err);
  }
};

export const CategoryController = {
  insertIntoDb,
};
