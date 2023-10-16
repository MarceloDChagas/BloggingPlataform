import { MongoDBPostRepository } from "../../infrastructure/repositories/database/MongoDB/mongoDB.PostRepository";
import { GetPostController } from "./getPostController";
import { GetPostUseCase } from "./getPostUseCase";

export const getPostUseCase = new GetPostUseCase(new MongoDBPostRepository());
export const getPostController = new GetPostController(getPostUseCase);