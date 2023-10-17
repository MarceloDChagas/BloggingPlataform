import { ICommentRepository } from "../../ICommentRepository";
import CommentSchema from "./Comment/CommentSchema";
import { Comment } from "../../../../entities/comment";

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
      console.log("Comentário criado com sucesso", newComment);
      return {
        ...newComment.toObject(),
        id: newComment._id.toString(),
      } as Comment;
    } catch (err) {
      console.error("Houve um erro ao criar o comentário", err);
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
      const deletedComment = await CommentSchema.findByIdAndDelete(id);
      console.log("Comentário deletado com sucesso", deletedComment);
    } catch (err) {
      console.error("Houve um erro ao deletar o comentário", err);
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
      console.log("Comentários encontrados com sucesso", comments);
      return comments.map((comment) => ({
        ...comment.toObject(),
        id: comment._id.toString(),
      })) as Comment[];
    } catch (err) {
      console.error("Houve um erro ao buscar os comentários", err);
      throw new Error("Erro ao buscar os comentários");
    }
  }
}
