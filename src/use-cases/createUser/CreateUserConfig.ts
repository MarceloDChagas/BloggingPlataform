import { CreateUserUseCase } from "./CreateUserUseCase";
import { CreateUserController } from "./CreateUserController";
import { UserRepository } from "../GlobalConfig";

export const createUserUseCase = new CreateUserUseCase(UserRepository);
export const createUserController = new CreateUserController(createUserUseCase); 