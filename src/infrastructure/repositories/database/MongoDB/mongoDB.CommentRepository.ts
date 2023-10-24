import { ICommentRepository } from "../../ICommentRepository";
import CommentSchema from "./Comment/CommentSchema";
import { Comment } from "../../../../entities/comment";
import { CommentRepository, UserRepository } from "../../../../use-cases/GlobalConfig";

/**
 * MongoDB implementation of the Comment Repository interface.
 */
export class MongoDBCommentRepository implements ICommentRepository {

	/**
   * Creates a new comment in the database.
   * @param comment The comment to be created.
   * @returns The created comment with its ID.
   * @throws An error if there was a problem creating the comment.
   */
	async create(comment: Comment): Promise<Comment> {
		try {
			const newComment = await CommentSchema.create(comment);
			return {
				...newComment.toObject(),
				id: newComment._id.toString(),
			} as Comment;
		} catch (err) {
			throw new Error("Erro ao criar o comentário");
		}
	}

  
	/**
   * Deletes a comment from the database.
   * @param id The ID of the comment to be deleted.
   * @throws An error if there was a problem deleting the comment.
   */
  
	async delete(id: string): Promise<void> {
		try {
			await CommentSchema.findByIdAndDelete(id);
		} catch (err) {
			throw new Error("Erro ao deletar o comentário");
		}
	}

	/**
   * Retrieves all comments from the database.
   * @returns An array of all comments in the database.
   * @throws An error if there was a problem retrieving the comments.
   */
	async getAll(): Promise<Comment[]> {
		try {
			const comments = await CommentSchema.find();
			return comments.map((comment) => ({
				...comment.toObject(),
				id: comment._id.toString(),
			})) as Comment[];
		} catch (err) {
			throw new Error("Erro ao buscar os comentários");
		}
	}

	async getById(id: string): Promise<Comment> {
		try {
			const comment = await CommentSchema.findById(id);
			if (!comment) {
				throw new Error("Comentário não encontrado");
			}
			return {
				...comment.toObject(),
				id: comment._id.toString(),
			} as Comment;
		}catch(err){
			throw new Error("Erro ao buscar o comentário");
		}
	}

	async update(id: string, comment: Comment): Promise<void> {
		try {
			await CommentSchema.findByIdAndUpdate(id, comment);
		} catch(err){
			throw new Error("Erro ao atualizar o comentário");
		}
	}

	async likeComment(commentId: string, userId: string): Promise<void> {
		try{
			const comment = await CommentRepository.getById(commentId);
			await UserRepository.findById(userId);
			comment.likes?.addLike(userId);
			await CommentRepository.update(commentId, comment);
		}catch(err){
			throw new Error("Erro ao curtir o comentário");
		}
	}
}