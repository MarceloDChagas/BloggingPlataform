import { MongoDBUserRepository } from "../../infrastructure/repositories/database/MongoDB/mongoDB.UserRepository";
import { GetPostByUserUseCase } from "./getPostByUserUseCase";
import { GetPostByUserController } from "./getPostByUserController";

export const getPostByUserUseCase = new GetPostByUserUseCase(new MongoDBUserRepository);
export const getPostByUserController = new GetPostByUserController(getPostByUserUseCase);
