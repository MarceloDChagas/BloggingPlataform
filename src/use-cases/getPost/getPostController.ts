import { GetPostUseCase } from "./getPostUseCase";
import { Request, Response } from "express";

export class GetPostController {
  constructor(private getPostUseCase: GetPostUseCase) {}
  async handleGetById(request: Request, response: Response) {
    const { id } = request.params;
    const post = await this.getPostUseCase.executeGetById(id);
    return response.status(200).json(post);
  }
  async handleGetAll(request: Request, response: Response) {
    const posts = await this.getPostUseCase.executeGetAll();
    return response.status(200).json(posts);
  }
}
