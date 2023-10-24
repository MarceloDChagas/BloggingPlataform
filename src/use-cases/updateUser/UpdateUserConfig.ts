import { UpdateUserController } from "./UpdateUserController";
import { UpdateUserUseCase } from "./UpdateUserUseCase";
import { UserRepository } from "../GlobalConfig";

export const updateUserUseCase = new UpdateUserUseCase(UserRepository);
export const updateUserController = new UpdateUserController(updateUserUseCase);
