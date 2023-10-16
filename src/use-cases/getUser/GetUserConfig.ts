import { MongoDBUserRepository } from "../../infrastructure/repositories/database/MongoDB/mongoDB.UserRepository";
import { GetUserUseCase } from "./GetUserUseCase";
import { GetUserController } from "./GetUserController";

export const getUserUseCase = new GetUserUseCase(new MongoDBUserRepository);
export const getUserController = new GetUserController(getUserUseCase); 