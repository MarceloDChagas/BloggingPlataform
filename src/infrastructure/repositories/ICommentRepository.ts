import { Comment } from "../../entities/comment";

export interface ICommentRepository {
  create(comment: Comment): Promise<Comment>;
  delete(id: string): Promise<void>;
  getAll(): Promise<Comment[] | undefined>;
  getById(id: string): Promise<Comment | undefined>;
  update(id: string, comment: Comment): Promise<void> | null;
  likeComment(commentId: string, userId: string): Promise<void>;
}
