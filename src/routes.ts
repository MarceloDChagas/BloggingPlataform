import express, { Request, Response } from "express";
import { connectionToMongo, url } from "./infrastructure/repositories/database/MongoDB/mongo.connection";
import { createUserController } from "./use-cases/createUser/CreateUserConfig";
import { createPostController } from "./use-cases/createPost/CreatePostConfig";
import { getUserController } from "./use-cases/getUser/GetUserConfig";
import { updateUserController } from "./use-cases/updateUser/UpdateUserConfig";
import { deleteUserController } from "./use-cases/deleteUser/DeleteUserConfig";
import { commentOnPostController } from "./use-cases/commentOnPost/CommentOnPostConfig";
import { getPostController } from "./use-cases/getPost/GetPostConfig";
import { userCreatePostController } from "./use-cases/userCreatePost/UserCreatePostConfig";
import { getCommentController } from "./use-cases/getComment/GetCommentConfig";
import { getPostByUserController } from "./use-cases/getPostsByUser/getPostByUserConfig";

const router = express.Router();

router.use((_req: Request, _res: Response, next) => {
	connectionToMongo(url);
	next();
});

router.get("/users/:email", async (req: Request, res: Response) => {
	try {
		await getUserController.handleGetUserByEmail(req, res);
	} catch (error) {
		return res.sendStatus(404);
	}
});

router.post("/users", async (req: Request, res: Response) => {
	try {
		await createUserController.handleCreateUser(req, res);
	} catch (error) {
		console.log(error);
		return res.sendStatus(400);
	}
});

router.post("/posts", async (req: Request, res: Response) => {
	try {
		await createPostController.handleCreatePost(req, res);
	} catch (error) {
		return res.sendStatus(500);
	}
});

router.get("/users", async (req: Request, res: Response) => {
	try {
		await getUserController.handleGetAllUser(req, res);
	} catch (error) {
		return res.sendStatus(404);
	}
});

router.put("/users/:email", async (req: Request, res: Response) => {
	try {
		await updateUserController.handleUpdateUser(req, res);
	} catch (error) {
		return res.sendStatus(500);
	}
});

router.delete("/users/:email", async (req: Request, res: Response) => {
	try {
		await deleteUserController.handleDeleteUserByEmail(req, res);
	} catch (error) {
		return res.sendStatus(404);
	}
});

router.post("/postsComment", async (req: Request, res: Response) => {
	try {
		await commentOnPostController.handleCommentOnPost(req, res);
	} catch (error) {
		return res.sendStatus(500);
	} });

router.get("/posts/:id", async (req: Request, res: Response) => {
	try {
		await getPostController.handleGetPostById(req, res);
	} catch (error) {
		return res.sendStatus(500);
	}
});

router.post("/usersPosts", async (req: Request, res: Response) => {
	try {
		await userCreatePostController.handleUserCreatePost(req, res);
	} catch (error) {
		return res.sendStatus(500);
	}
});

router.get("/comments", async (req: Request, res: Response) => {
	try {
		await getCommentController.handleGetAllComments(req, res);
	} catch (error) {
		return res.sendStatus(500);
	}
});

router.get("/usersPosts", async (req: Request, res: Response) => {
	try {
		await getPostByUserController.handleGetPostByUser(req, res);
	}
	catch (error) {
		return res.sendStatus(500);
	}
});

export default router;

