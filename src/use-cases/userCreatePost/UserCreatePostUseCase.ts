import { IPostDTO } from "../../entities/IPostDTO";
import { Post } from "../../entities/post";
import { User } from "../../entities/user";
import { IPostRepository } from "../../infrastructure/repositories/IPostRepository";

export class UserCreatePostUseCase {
	constructor(public postRepository: IPostRepository, private user: User) {}
	async executeUserCreatePost(data: IPostDTO): Promise<Post> {
		const postConstructor = new Post(data);
		const post = await this.postRepository.createPost(postConstructor);
		this.user.posts?.push(post);
		return post;
	}
}
