import { IPostRepository } from "../../infrastructure/repositories/IPostRepository";

export class GetPostUseCase {
    constructor(private postRepository: IPostRepository){}
    async executeGetById(postId: string) {
        const post = await this.postRepository.getById(postId);
        if(!post) {
            throw new Error("Post not found");
        }
        return post;
    }
    async executeGetAll() {
        const posts = await this.postRepository.getAllPosts();
        return posts;
    }
}