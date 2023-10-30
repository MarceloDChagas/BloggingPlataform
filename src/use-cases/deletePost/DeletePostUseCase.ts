import { IPostRepository } from "../../infrastructure/repositories/IPostRepository";

export class DeletePostUseCase {
	constructor(private postRepository: IPostRepository) {}

	async executeDeletePost(postId: string) {
		const post = await this.postRepository.getById(postId);
		if (!post) {
			throw new Error("Post not found");
		}
		await this.postRepository.deletePost(postId);
	}
}