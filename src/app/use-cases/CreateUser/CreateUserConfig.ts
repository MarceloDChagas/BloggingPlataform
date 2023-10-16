import { CreateUserController } from "./CreateUserController";
import { CreateUserUseCase } from "./CreateUserCase";
import { MongoDBUserRepository } from "../../repositories/database/MongoDB/user.database.mongo";

const mongoDBUserRepository = new MongoDBUserRepository();

export const createUserUseCase = new CreateUserUseCase(mongoDBUserRepository);

export const createUserController = new CreateUserController(createUserUseCase);
