/**
 * Express router instance for handling HTTP requests related to users, posts and comments.
 */
import express, { Request, Response } from "express";
import { connectionToMongo } from "./infrastructure/repositories/database/MongoDB/mongo.connection";
import { createUserController } from "./use-cases/createUser/CreateUserConfig";
import { createPostController } from "./use-cases/createPost/CreatePostConfig";
import { getUserController } from "./use-cases/getUser/GetUserConfig";
import { updateUserController } from "./use-cases/updateUser/UpdateUserConfig";
import { deleteUserController } from "./use-cases/deleteUser/DeleteUserConfig";
import { commentOnPostController } from "./use-cases/commentOnPost/CommentOnPostConfig";
import { getPostController } from "./use-cases/getPost/GetPostConfig";
import { userCreatePostController } from "./use-cases/userCreatePost/UserCreatePostConfig";
import { getCommentController } from "./use-cases/getComment/GetCommentConfig";

const router = express.Router();

router.use((_req: Request, _res: Response, next) => {
  connectionToMongo();
  next();
});

/**
 * Endpoint for testing the server.
 */
router.get("/", (_req: Request, res: Response) => {
  res.send("Hello World!");
});

/**
 * Endpoint for creating a new user.
 * @param req - The request object.
 * @param res - The response object.
 * @returns A success message.
 */
router.post("/users", async (req: Request, res: Response) => {
  try {
    await createUserController.handleCreateUser(req, res);
  } catch (error) {
    return res.sendStatus(500);
  }
  res.status(201).send({ message: "Usuário criado com sucesso!" });
});

/**
 * Endpoint for creating a new post.
 * @param req - The request object.
 * @param res - The response object.
 * @returns A success message.
 */
router.post("/posts", async (req: Request, res: Response) => {
  try {
    await createPostController.handleCreatePost(req, res);
  } catch (error) {
    return res.sendStatus(500);
  }
  res.status(201).send({ message: "Post criado com sucesso!" });
});

/**
 * Endpoint for retrieving all users.
 * @param req - The request object.
 * @param res - The response object.
 * @returns An array of User objects.
 */
router.get("/users", async (req: Request, res: Response) => {
  try {
     await getUserController.handleGetAllUser(req, res);
    } catch (error) {
    return res.sendStatus(500);
  }
});

/**
 * Endpoint for updating a user.
 * @param req - The request object.
 * @param res - The response object.
 * @returns A success message.
 */
router.put("/users/:email", async (req: Request, res: Response) => {
  try {
    await updateUserController.handleUpdateUser(req, res);
  } catch (error) {
    return res.sendStatus(500);
  }
  res.send({ message: "Usuário atualizado com sucesso!" });
});

/**
 * Endpoint for deleting a user.
 * @param req - The request object.
 * @param res - The response object.
 * @returns A success message.
 */
router.delete("/users/:id", async (req: Request, res: Response) => {
  try {
    await deleteUserController.handleDeleteUser(req, res);
  } catch (error) {
    return res.sendStatus(500);
  }
  res.send({ message: "Usuário deletado com sucesso!" });
});

/**
 * Endpoint for commenting on a post.
 * @param req - The request object.
 * @param res - The response object.
 * @returns A success message.
 */
router.post("/posts/:id/comments", async (req: Request, res: Response) => {
  try {
    await commentOnPostController.handleCommentOnPost(req, res);
  } catch (error) {
    return res.sendStatus(500);
  }
  res.status(201).send({ message: "Comentário adicionado com sucesso!" });
});

/**
 * Endpoint for retrieving a post.
 * @param req - The request object.
 * @param res - The response object.
 * @returns A Post object.
 */
router.get("/posts/:id", async (req: Request, res: Response) => {
  try {
     await getPostController.handleGetPostById(req, res);
  } catch (error) {
    return res.sendStatus(500);
  }
});

router.get("/posts",async (req: Request, res:Response) => {
  try {
   await getPostController.handleGetAllPosts(req, res);
  } catch (error) {
    return res.sendStatus(500);
  }  
})

/**
 * Endpoint for creating a new post.
 * @param req - The request object.
 * @param res - The response object.
 * @returns A success message.
 */
router.post("/usersPost", async (req: Request, res: Response) => {
  try {
    await userCreatePostController.handleUserCreatePost(req, res);
  } catch (error) {
    return res.sendStatus(500);
  }
  res.status(201).send({ message: "Post criado com sucesso!" });
});

/**
 * Endpoint for retrieving all comments.
 * @param req - The request object.
 * @param res - The response object.
 * @returns An array of Comment objects.
 */
router.get("/comments", async (req: Request, res: Response) => {
  try {
    await getCommentController.handleGetAllComments(req, res);
  } catch (error) {
    return res.sendStatus(500);
  }
});

export default router;

