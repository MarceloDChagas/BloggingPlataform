import { MongoDBUserRepository } from "../../infrastructure/repositories/database/MongoDB/mongoDB.UserRepository";
import { GetPostByUserUseCase } from "./getPostByUserUseCase";
import { GetPostByUserController } from "./getPostByUserController";
import { UserRepository } from "../GlobalConfig";

export const getPostByUserUseCase = new GetPostByUserUseCase(UserRepository);
export const getPostByUserController = new GetPostByUserController(getPostByUserUseCase);
