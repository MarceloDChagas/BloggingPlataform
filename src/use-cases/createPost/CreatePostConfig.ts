import { MongoDBPostRepository } from "../../infrastructure/repositories/database/MongoDB/mongoDB.PostRepository";
import { CreatePostUseCase } from "./CreatePostUseCase";
import { CreatePostController } from "./CreatePostController";

export const createPostUseCase = new CreatePostUseCase(
  new MongoDBPostRepository()
);
export const createPostController = new CreatePostController(createPostUseCase);
