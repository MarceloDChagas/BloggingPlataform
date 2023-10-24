import { DeletCommentController } from "./DeleteCommentController";
import { DeleteCommentUseCase } from "./DeleteCommentUseCase";
import { CommentRepository } from "../GlobalConfig";

export const deleteCommentUseCase = new DeleteCommentUseCase(CommentRepository);
export const deleteCommentController = new DeletCommentController(deleteCommentUseCase);