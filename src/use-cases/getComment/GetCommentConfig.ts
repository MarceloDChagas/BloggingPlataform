import { GetCommentController } from "./GetCommentController";
import { GetCommentUseCase } from "./GetCommentUseCase";
import { CommentRepository } from "../GlobalConfig";

export const getCommentUseCase = new GetCommentUseCase(CommentRepository);
export const getCommentController = new GetCommentController(getCommentUseCase);