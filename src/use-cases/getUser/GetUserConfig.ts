import { GetUserUseCase } from "./GetUserUseCase";
import { GetUserController } from "./GetUserController";
import { UserRepository } from "../GlobalConfig";

export const getUserUseCase = new GetUserUseCase(UserRepository);
export const getUserController = new GetUserController(getUserUseCase); 