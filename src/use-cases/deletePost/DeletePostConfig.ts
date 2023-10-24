import { DeletePostUseCase } from "./DeletePostUseCase";
import { DeletePostController } from "./DeletePostController";
import { PostRepository } from "../GlobalConfig";

export const deletePostUseCase = new DeletePostUseCase(PostRepository);
export const deletePostController = new DeletePostController(deletePostUseCase);