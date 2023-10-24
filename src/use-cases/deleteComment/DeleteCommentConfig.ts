import { MongoDBCommentRepository } from "../../infrastructure/repositories/database/MongoDB/mongoDB.CommentRepository"
import { DeletCommentController } from "./DeleteCommentController";
import { DeleteCommentUseCase } from "./DeleteCommentUseCase";


export const deleteCommentUseCase = new DeleteCommentUseCase(new MongoDBCommentRepository);
export const deleteCommentController = new DeletCommentController(deleteCommentUseCase);