import { MongoDBUserRepository } from "../../infrastructure/repositories/database/MongoDB/mongoDB.UserRepository";
import { CreateUserUseCase } from "./CreateUserUseCase";
import { CreateUserController } from "./CreateUserController";

export const createUserUseCase = new CreateUserUseCase(new MongoDBUserRepository);
export const createUserController = new CreateUserController(createUserUseCase); 