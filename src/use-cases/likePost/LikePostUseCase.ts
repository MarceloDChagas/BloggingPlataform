import { IUserRepository } from "../../infrastructure/repositories/IUserRepository";
import { IPostRepository } from "../../infrastructure/repositories/IPostRepository";
import { Post } from "../../entities/post";

export class LikePostUseCase {
	constructor(private postRepository: IPostRepository, private userRepository: IUserRepository) { }

	async executeLikePost(postId: string, userEmail:string): Promise<[Post, string]> {
		const post = await this.postRepository.getById(postId);
		if(!post) {
			throw new Error("Post not found");
		}
		const user = await this.userRepository.findByEmail(userEmail);
		if(!user) {
			throw new Error("User not found");
		}
		const userAlreadyLiked = await this.postRepository.userAlreadyLiked([post, user.email]);
		if(userAlreadyLiked) {
			throw new Error("User already liked this post");
		}
		await this.postRepository.likePost([post, user.email]);
		return [post, user.email];
	}

	async executeDeslikePost(postId: string, userEmail:string): Promise<[Post, string]> {
		const post = await this.postRepository.getById(postId);
		if(!post) {
			throw new Error("Post not found");
		}
		const user = await this.userRepository.findByEmail(userEmail);
		if(!user) {
			throw new Error("User not found");
		}
		const userAlreadyLiked = await this.postRepository.userAlreadyLiked([post, user.email]);
		if(!userAlreadyLiked) {
			throw new Error("User not liked this post");
		}
		await this.postRepository.deslikePost([post, user.email]);
		return [post, user.email];
	}
}