import { GetPostUseCase } from "./GetPostUseCase"
import { Request, Response } from "express";

export class GetPostController {
	constructor(private getPostUseCase: GetPostUseCase) {}
	async handleGetPostById(request: Request, response: Response) {
		const { id } = request.params;
		const post = await this.getPostUseCase.executeGetById(id);
		return response.status(200).json(post);
	}
	async handleGetAllPosts(request: Request, response: Response) {
		const posts = await this.getPostUseCase.executeGetAll();
		return response.status(200).json(posts);
	}
}
