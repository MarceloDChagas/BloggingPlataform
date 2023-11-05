import { ICommentRepository } from "../../infrastructure/repositories/ICommentRepository";

export class GetCommentUseCase {
	constructor(private commentRepository: ICommentRepository) {}
	async executeGetAll() {
		const comments = await this.commentRepository.getAll();
		if(!comments){
			throw new Error("Comments not found");
		
		}
		return comments;
	}

	async executeGetById(id: string) {
		const comment = await this.commentRepository.getById(id);
		if(!comment){
			throw new Error("Comment not found");
		}
		return comment;
	}
}