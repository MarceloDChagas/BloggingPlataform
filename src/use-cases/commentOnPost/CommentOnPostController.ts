import { IPostRepository } from "../../infrastructure/repositories/IPostRepository";
import { Request, Response } from "express";
import { CommentOnPostUseCase } from "./CommentOnPostUseCase";

export class CommentOnPostController {
  constructor(
    private commentOnPostUseCase: CommentOnPostUseCase,
    private postRepository: IPostRepository
  ) {}
  async handleCommentOnPost(req: Request, res: Response) {
    const { content, postId } = req.body;
    const post = await this.postRepository.getById(postId);
    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }
    const comment = await this.commentOnPostUseCase.commentRepository.create({
      content,
    });
    await this.postRepository.addComment(postId, comment);
    return res.status(201).json({ message: "Comment created" });
  }
}
