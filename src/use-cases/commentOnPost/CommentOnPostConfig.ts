import { Post } from "../../entities/post";
import { MongoDBCommentRepository } from "../../infrastructure/repositories/database/MongoDB/mongoDB.CommentRepository";
import { MongoDBPostRepository } from "../../infrastructure/repositories/database/MongoDB/mongoDB.PostRepository";
import { CommentOnPostController } from "./CommentOnPostController";
import { CommentOnPostUseCase } from "./CommentOnPostUseCase";

const post = new Post({ content: "Teste", title: "Teste" });
export const commentOnPostUseCase = new CommentOnPostUseCase(
	new MongoDBCommentRepository(),
	post
);
export const commentOnPostController = new CommentOnPostController(
	commentOnPostUseCase,
	new MongoDBPostRepository()
);
