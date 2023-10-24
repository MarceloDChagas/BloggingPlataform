import { Post } from "../../entities/post";
import { CommentOnPostController } from "./CommentOnPostController";
import { CommentOnPostUseCase } from "./CommentOnPostUseCase";
import { PostRepository, CommentRepository } from "../GlobalConfig";

const post = new Post({ content: "Teste", title: "Teste" });
export const commentOnPostUseCase = new CommentOnPostUseCase(
	CommentRepository,
	post
);
export const commentOnPostController = new CommentOnPostController(
	commentOnPostUseCase,
	PostRepository
);
