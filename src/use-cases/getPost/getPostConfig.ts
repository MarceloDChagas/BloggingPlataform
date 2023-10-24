import { GetPostController } from "./GetPostController";
import { GetPostUseCase } from "./GetPostUseCase";
import { PostRepository } from "../GlobalConfig";

export const getPostUseCase = new GetPostUseCase(PostRepository);
export const getPostController = new GetPostController(getPostUseCase);