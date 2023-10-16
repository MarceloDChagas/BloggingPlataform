import { ICommentRepository } from "../../ICommentRepository";
import CommentSchema from "./Comment/CommentSchema";
import { Comment } from "../../../../entities/comment";

export class MongoDBCommentRepository implements ICommentRepository {
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
  async delete(id: string): Promise<void> {
    try {
      const deletedComment = await CommentSchema.findByIdAndDelete(id);
      console.log("Comentário deletado com sucesso", deletedComment);
    } catch (err) {
      console.error("Houve um erro ao deletar o comentário", err);
      throw new Error("Erro ao deletar o comentário");
    }
  }
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
