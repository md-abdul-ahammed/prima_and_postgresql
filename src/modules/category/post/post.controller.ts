import express, { Request, Response } from "express";
import { PostService } from "./post.service";

const insertIntoDb = async (req: Request, res: Response) => {
  try {
    const result = await PostService.insertIntoDb(req.body);
    res.send({
      success: true,
      message: "Post Created Successfully",
      data: result,
    });
  } catch (err) {
    res.send(err);
  }
};
const getAllPostsController = async (req: Request, res: Response) => {
  try {
    const result = await PostService.getAllPosts();
    res.send({
      success: true,
      message: "Post fetched Successfully",
      data: result,
    });
  } catch (err) {
    res.send(err);
  }
};

export const PostController = {
  insertIntoDb,
  getAllPostsController,
};
