import { MongoDBCommentRepository } from "../../infrastructure/repositories/database/MongoDB/mongoDB.CommentRepository";
import { GetCommentController } from "./GetCommentController";
import { GetCommentUseCase } from "./GetCommentUseCase";

export const getCommentUseCase = new GetCommentUseCase(new MongoDBCommentRepository());
export const getCommentController = new GetCommentController(getCommentUseCase);