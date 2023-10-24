import { DeleteUserController } from "./DeleteUserController";
import { DeleteUserUseCase } from "./DeleteUserUseCase";
import { UserRepository } from "../GlobalConfig";

export const deleteUserUseCase = new DeleteUserUseCase(UserRepository);
export const deleteUserController = new DeleteUserController(deleteUserUseCase);