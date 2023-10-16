import { MongoDBUserRepository } from "../../infrastructure/repositories/database/MongoDB/mongoDB.UserRepository";
import { UpdateUserController } from "./UpdateUserController";
import { UpdateUserUseCase } from "./UpdateUserUseCase";


export const updateUserUseCase = new UpdateUserUseCase(new MongoDBUserRepository);
export const updateUserController = new UpdateUserController(updateUserUseCase);
