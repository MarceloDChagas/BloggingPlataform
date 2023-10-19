import { IUserRepository } from "../../infrastructure/repositories/IUserRepository";
import { UserCreatePostUseCase } from "./UserCreatePostUseCase";
import { Request, Response } from "express";

export class UserCreatePostController {
  constructor(
    private userCreatePostUseCase: UserCreatePostUseCase,
    private userRepository: IUserRepository
  ) {}
  async handleUserCreatePost(request: Request, response: Response) {
    const { title, content, email } = request.body;
    const user = this.userRepository.findByEmail(email);
    if (!user) {
      return response.status(404).json({ message: "User not found" });
    }
    const post = this.userCreatePostUseCase.executeCreatePost({
      title,
      content,
    });
    if (!post) {
      return response.status(400).json({ message: "Post not created" });
    }
    await this.userRepository.addPost(email, await post);
  }
}
