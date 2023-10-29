import { GetCommentUseCase } from "./GetCommentUseCase";
import { Request, Response } from "express";

export class GetCommentController {
	constructor(private getCommentUseCase: GetCommentUseCase) {}
	async handleGetAllComments(_request: Request, response: Response) {
		try {
			const comments = await this.getCommentUseCase.executeGetAll();
			return response.status(200).json(comments);
		} catch (error) {
			return response.status(404).json({ message: "Erro ao buscar os comentários" });
		}
	}

	async handleGetCommentById(request: Request, response: Response) {
		try {
			const { id } = request.params;
			const comment = await this.getCommentUseCase.executeGetById(id);
			return response.status(200).json(comment);
		} catch (error) {
			return response.status(404).json({ message: "Erro ao buscar o comentário" });
		}
	}
}
