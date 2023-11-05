import { Request, Response } from "express";
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
  const options = req.query;
  try {
    const result = await PostService.getAllPosts(options);
    res.send({
      success: true,
      message: "Post fetched Successfully",
      total: result.total,
      data: result.data,
    });
  } catch (err) {
    res.send(err);
  }
};
const updatePostController = async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const data = req.body;
  try {
    const result = await PostService.updatePost(id, data);
    res.send({
      success: true,
      message: "Post Updated Successfully",
      data: result,
    });
  } catch (err) {
    res.send(err);
  }
};

const deletePostController = async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  try {
    const result = await PostService.deletePost(id);
    res.send({
      success: true,
      message: "Post Deleted Successfully",
      data: result,
    });
  } catch (err) {
    res.send(err);
  }
};

const learnAggregateAndGrouping = async (req: Request, res: Response) => {
  try {
    const result = await PostService.learnAggregateAndGrouping();
    res.send({
      success: true,
      message: "Result!",
      data: result,
    });
  } catch (err) {
    res.send(err);
  }
};

export const PostController = {
  insertIntoDb,
  getAllPostsController,
  updatePostController,
  deletePostController,
  learnAggregateAndGrouping,
};
