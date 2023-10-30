import { ICommentRepository } from "../../infrastructure/repositories/ICommentRepository";

export class DeleteCommentUseCase {
	constructor(private commentRepository: ICommentRepository) {
	}
	async executeDeleteCommentById(id: string) {
		return await this.commentRepository.delete(id);
	}
}