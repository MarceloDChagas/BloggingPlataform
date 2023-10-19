import { MongoDBPostRepository } from "../../infrastructure/repositories/database/MongoDB/mongoDB.PostRepository";
import { GetPostController } from "./GetPostController";
import { GetPostUseCase } from "./GetPostUseCase";

export const getPostUseCase = new GetPostUseCase(new MongoDBPostRepository());
export const getPostController = new GetPostController(getPostUseCase);