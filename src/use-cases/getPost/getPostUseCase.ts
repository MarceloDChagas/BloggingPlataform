import { IPostRepository } from "../../infrastructure/repositories/IPostRepository";

export class GetPostUseCase {
	constructor(private postRepository: IPostRepository){}
	async executeGetPostById(postId: string) {
		const post = await this.postRepository.getById(postId);
		if(!post) {
			throw new Error("Don't have any posts with this id");
		}
		return post;
	}
	async executeGetAllPosts() {
		const posts = await this.postRepository.getAllPosts();
		if(!posts) {
			throw new Error("Don't have any posts");
		}
		return posts;
	}
}