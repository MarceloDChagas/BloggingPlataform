import { IPostDTO } from "../../entities/IPostDTO";
import { Post } from "../../entities/post";
import { IPostRepository } from "../../infrastructure/repositories/IPostRepository";

export class CreatePostUseCase {
    constructor(private postRepository: IPostRepository)  {}
    async executeCreatePost(data: IPostDTO): Promise<void> {
        const post = new Post(data);
        await this.postRepository.createPost(post);
    }
}