import { MongoDBPostRepository } from "../../infrastructure/repositories/database/MongoDB/mongoDB.PostRepository";
import { DeletePostUseCase } from "./DeletePostUseCase";
import { DeletePostController } from "./DeletePostController";

export const deletePostUseCase = new DeletePostUseCase(new MongoDBPostRepository);
export const deletePostController = new DeletePostController(deletePostUseCase);