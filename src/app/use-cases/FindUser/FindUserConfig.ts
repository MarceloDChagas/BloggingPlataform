import { FindUserUseCase } from "./FindUserUseCase";
import { FindUserController } from "./FindUserController";
import { MongoDBUserRepository } from "../../repositories/database/MongoDB/user.database.mongo";

const mongoDBUserRepository = new MongoDBUserRepository();

export const findUserUseCase = new FindUserUseCase(mongoDBUserRepository);

export const findUserController = new FindUserController(findUserUseCase);
