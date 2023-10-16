import { ICommentRepository } from "../../infrastructure/repositories/ICommentRepository";
import { IPostRepository } from "../../infrastructure/repositories/IPostRepository";
import { Request, Response } from "express";
import { CommentOnPostUseCase } from "./CommentOnPostUseCase";

export class CommentOnPostController {
  constructor(
    private commentOnPostUseCase: CommentOnPostUseCase,
    private postRepository: IPostRepository
  ) {}
  async handle(request: Request, response: Response) {
    const { postId } = request.params;
    const { content } = request.body;
    const post = await this.postRepository.getById(postId);
    if (!post) {
      return response.status(404).json({ message: "Post not found" });
    }
    const comment = await this.commentOnPostUseCase.commentRepository.create({
      content,
    });
    await this.postRepository.addComment(postId, comment);
  }
}
