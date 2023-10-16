import { IPostDTO } from "../../entities/IPostDTO";
import { Post } from "../../entities/post";
import { User } from "../../entities/user";
import { IPostRepository } from "../../infrastructure/repositories/IPostRepository";

export class UserCreatePostUseCase {
  constructor(public postRepository: IPostRepository, private user: User) {}
  async executeCreatePost(data: IPostDTO): Promise<Post> {
    const post = await this.postRepository.createPost(data);
    this.user.posts?.push(post);
    return post;
  }
}
