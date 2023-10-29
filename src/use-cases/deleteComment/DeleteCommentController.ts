import { DeleteCommentUseCase } from "./DeleteCommentUseCase";
import { Request, Response } from "express";

export class DeletCommentController {
	constructor(private deleteCommentUseCase: DeleteCommentUseCase) {}

	async handleDeleteCommentById(request: Request, response: Response) {
		try {
			const { id } = request.params;
			await this.deleteCommentUseCase.executeDeleteCommentById(id);
			return response.status(200).send("Comentário deletado com sucesso!");
		} catch (error) {
			console.error(error);
			return response.status(404).send("Erro ao deletar o comentário");
		}
	}
}