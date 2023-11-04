import express from "express";
import { PostController } from "./post.controller";

const router = express.Router();

router.post("/create-post", PostController.insertIntoDb);
router.get("/", PostController.getAllPostsController);

export const PostRoutes = router;
