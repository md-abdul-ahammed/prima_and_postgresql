import express from "express";
import { PostController } from "./post.controller";

const router = express.Router();

router.post("/create-post", PostController.insertIntoDb);
router.get("/", PostController.getAllPostsController);
router.patch("/:id", PostController.updatePostController);
router.delete("/:id", PostController.deletePostController);
router.get("/learn-query", PostController.learnAggregateAndGrouping);

export const PostRoutes = router;
