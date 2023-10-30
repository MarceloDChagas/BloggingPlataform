import express, { Request, Response } from "express";
import { connectionToMongo, url } from "./infrastructure/repositories/database/MongoDB/mongo.connection";
import { createUserController } from "./use-cases/createUser/CreateUserConfig";
import { createPostController } from "./use-cases/createPost/CreatePostConfig";
import { getUserController } from "./use-cases/getUser/GetUserConfig";
import { updateUserController } from "./use-cases/updateUser/UpdateUserConfig";
import { deleteUserController } from "./use-cases/deleteUser/DeleteUserConfig";
import { commentOnPostController } from "./use-cases/commentOnPost/CommentOnPostConfig";
import { getPostController } from "./use-cases/getPost/getPostConfig";
import { userCreatePostController } from "./use-cases/userCreatePost/UserCreatePostConfig";
import { getCommentController } from "./use-cases/getComment/GetCommentConfig";
import { getPostByUserController } from "./use-cases/getPostsByUser/getPostByUserConfig";
import { deletePostController } from "./use-cases/deletePost/DeletePostConfig";
import { deleteCommentController } from "./use-cases/deleteComment/DeleteCommentConfig";

const router = express.Router();

router.use((_req: Request, _res: Response, next) => {
	connectionToMongo(url);
	next();
});

router.get("/users/:email", async (req: Request, res: Response) => {
	await getUserController.handleGetUserByEmail(req, res);
});

router.get("/posts", async (req: Request, res: Response) => {
	await getPostController.handleGetAllPosts(req, res);
});

router.post("/users", async (req: Request, res: Response) => {
	await createUserController.handleCreateUser(req, res);
});

router.post("/posts", async (req: Request, res: Response) => {
	await createPostController.handleCreatePost(req, res);
});

router.get("/users", async (req: Request, res: Response) => {
	await getUserController.handleGetAllUser(req, res);
});

router.put("/users/:email", async (req: Request, res: Response) => {
	await updateUserController.handleUpdateUser(req, res);
});

router.delete("/users/:email", async (req: Request, res: Response) => {
	await deleteUserController.handleDeleteUserByEmail(req, res);
});

router.post("/postsComment", async (req: Request, res: Response) => {
	await commentOnPostController.handleCommentOnPost(req, res);
});

router.get("/posts/:id", async (req: Request, res: Response) => {
	await getPostController.handleGetPostById(req, res);
});

router.post("/usersPosts", async (req: Request, res: Response) => {
	await userCreatePostController.handleUserCreatePost(req, res);
});

router.get("/comments", async (req: Request, res: Response) => {
	await getCommentController.handleGetAllComments(req, res);
});

router.get("/comments/:id", async (req: Request, res: Response) => {
	await getCommentController.handleGetCommentById(req, res);
});

router.get("/usersPosts", async (req: Request, res: Response) => {
	await getPostByUserController.handleGetPostByUser(req, res);
});

router.delete("/posts/:id", async (req: Request, res: Response) => {
	await deletePostController.handleDeletePostById(req, res);
});

router.delete("/comments/:id", async (req: Request, res: Response) => {
	await deleteCommentController.handleDeleteCommentById(req, res);
});

router.post("/comments", async (req: Request, res: Response) => {
	await commentOnPostController.handleCommentOnPost(req, res);
});

export default router;

