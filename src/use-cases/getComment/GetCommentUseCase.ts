import { ICommentRepository } from "../../infrastructure/repositories/ICommentRepository";

export class GetCommentUseCase {
	constructor(private commentRepository: ICommentRepository) {}
	async executeGetAll() {
		const comments = await this.commentRepository.getAll();
		return comments;
	}

	async executeGetById(id: string) {
		const comment = await this.commentRepository.getById(id);
		return comment;
	}
}