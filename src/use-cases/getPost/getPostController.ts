import { GetPostUseCase } from "./GetPostUseCase";
import { Request, Response } from "express";

export class GetPostController {
	constructor(private getPostUseCase: GetPostUseCase) {}
	async handleGetPostById(request: Request, response: Response) {
		try {
			const { id } = request.params;
			const post = await this.getPostUseCase.executeGetById(id);
			return response.status(200).json(post);
		} catch (error) {
			return response.status(400).json({ message: "Erro ao buscar post" });
		}
	}
	async handleGetAllPosts(_request: Request, response: Response) {
		try {
			const posts = await this.getPostUseCase.executeGetAll();
			return response.status(200).json(posts);
		} catch (error) {
			return response.status(400).json({ message: "Erro ao buscar posts" });
		}
	}
}
