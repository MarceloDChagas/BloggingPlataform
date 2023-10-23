import { ICommentDTO } from "../../entities/ICommentDTO";
import { Comment } from "../../entities/comment";
import { Post } from "../../entities/post";
import { ICommentRepository } from "../../infrastructure/repositories/ICommentRepository";

export class CommentOnPostUseCase {
	constructor(
    public commentRepository: ICommentRepository,
    private post: Post
	) {}

	async executeCommentOnPost(data: ICommentDTO): Promise<void> {
		const comment = new Comment(data);
		await this.commentRepository.create(comment);
		this.post.comments?.push(comment.content);
	}
}

