/**
 * Express router instance for handling HTTP requests related to users, posts and comments.
 */
import express, { Request, Response, NextFunction } from "express";
import { User } from "./entities/user";
import { connectionToMongo } from "./infrastructure/repositories/database/MongoDB/mongo.connection";
import { createUserController } from "./use-cases/createUser/CreateUserConfig";
import { createPostController } from "./use-cases/createPost/CreatePostConfig";
import { getUserController } from "./use-cases/getUser/GetUserConfig";
import { updateUserController } from "./use-cases/updateUser/UpdateUserConfig";
import { deleteUserController } from "./use-cases/deleteUser/DeleteUserConfig";
import { commentOnPostController } from "./use-cases/commentOnPost/CommentOnPostConfig";
import { getPostController } from "./use-cases/getPost/getPostConfig";
import { userCreatePostController } from "./use-cases/userCreatePost/UserCreatePostConfig";

const router = express.Router();

router.use((_req, _res, next) => {
  connectionToMongo();
  next();
});

/**
 * Endpoint for testing the server.
 */
router.get("/", (_req: Request, res: Response, next: NextFunction) => {
  try {
    res.send("Hello World!");
  } catch (error) {
    next(error);
  }
});

/**
 * Endpoint for creating a new user.
 * @param req - The request object.
 * @param res - The response object.
 * @returns A success message.
 */
router.post(
  "/users",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      await createUserController.handleCreateUser(req, res);
      res.status(201).send({ message: "Usuário criado com sucesso!" });
    } catch (error) {
      next(error);
    }
  }
);

/**
 * Endpoint for creating a new post.
 * @param req - The request object.
 * @param res - The response object.
 * @returns A success message.
 */
router.post(
  "/posts",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      await createPostController.handleCreatePost(req, res);
      res.status(201).send({ message: "Post criado com sucesso!" });
    } catch (error) {
      console.log(error);
      next(error);
    }
  }
);

/**
 * Endpoint for retrieving all users.
 * @param req - The request object.
 * @param res - The response object.
 * @returns An array of User objects.
 */
router.get(
  "/users",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const users: User[] = await getUserController.handleGetAllUser(req, res);
      res.status(200).json(users);
    } catch (error) {
      next(error);
    }
  }
);

/**
 * Endpoint for updating a user.
 * @param req - The request object.
 * @param res - The response object.
 * @returns A success message.
 */
router.put(
  "/users/:email",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      await updateUserController.handleUpdateUser(req, res);
      res.status(200).send({ message: "Usuário atualizado com sucesso!" });
    } catch (error) {
      next(error);
    }
  }
);

/**
 * Endpoint for deleting a user.
 * @param req - The request object.
 * @param res - The response object.
 * @returns A success message.
 */
router.delete(
  "/users/:id",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      await deleteUserController.handleDeleteUser(req, res);
      res.status(200).send({ message: "Usuário excluído com sucesso!" });
    } catch (error) {
      next(error);
    }
  }
);

/**
 * Endpoint for creating a comment on a post.
 * @param req - The request object.
 * @param res - The response object.
 * @returns A success message.
 */
router.post("/comments/:postId", async (req: Request, res: Response, next: NextFunction) => {
    try {
        await commentOnPostController.handleCommentOnPost(req, res);
        res.status(201).send({ message: "Comentário criado com sucesso!" });
    } catch (err: any) {
      next(err);
    }
});

/**
 * Endpoint for retrieving all posts.
 * @param req - The request object.
 * @param res - The response object.
 * @returns An array of Post objects.
 */
router.get("/posts", async (req: Request, res: Response, next: NextFunction) => {
    try {
      const posts = await getPostController.handleGetAll(req, res);
      res.status(200).json(posts);
    } catch (error) {
      next(error);
    }
});

/**
 * Endpoint for retrieving a post by id.
 * @param req - The request object.
 * @param res - The response object.
 * @returns A Post object.
 */
router.get("/posts/:id", async (req: Request, res: Response, next: NextFunction) => {
    try {
      const post = await getPostController.handleGetById(req, res);
      res.status(200).json(post);
    } catch (error) {
      next(error);
    }
});

/**
 * Endpoint for creating a new post by a user.
 * @param req - The request object.
 * @param res - The response object.
 * @returns A Post object.
 */
router.post("/userPost/:email", async (req: Request, res: Response, next: NextFunction) => {
    try {
      const post = await userCreatePostController.handleCreatePost(req, res);
      res.status(200).json(post);
    } catch (error) {
      next(error);
    }
});

export default router;