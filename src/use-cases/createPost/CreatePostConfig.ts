import { CreatePostUseCase } from "./CreatePostUseCase";
import { CreatePostController } from "./CreatePostController";
import { PostRepository } from "../GlobalConfig";

export const createPostUseCase = new CreatePostUseCase(PostRepository);
export const createPostController = new CreatePostController(createPostUseCase);
