import express from "express";
import { UserController } from "./user.controller";

const router = express.Router();

router.post("/create-user", UserController.insertIntoDb);
router.post("/profile", UserController.insertOrUpdateProfile);
router.get("/", UserController.getUsers);
router.get("/:id", UserController.getSingleUser);

export const userRoutes = router;
