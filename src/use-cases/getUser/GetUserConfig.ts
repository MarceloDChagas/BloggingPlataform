import { MongoDBUserRepository } from "../../infrastructure/repositories/database/MongoDB/mongoDB.UserRepository";
import { GetUserController } from "./GetUserController";
import { GetUserUseCase } from "./GetUserUseCase";


export const getUserUseCase = new GetUserUseCase(new MongoDBUserRepository)
export const getUserController = new GetUserController(getUserUseCase)