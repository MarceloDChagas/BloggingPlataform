import { ICommentRepository } from "../../infrastructure/repositories/ICommentRepository";

export class GetCommentUseCase {
	constructor(private commentRepository: ICommentRepository) {}
	async executeGetAll() {
		const comments = await this.commentRepository.getAll();
		return comments;
	}
}