import { Comment } from "../../entities/comment";

export interface ICommentRepository {
  create(comment: Comment): Promise<Comment>;
  delete(id: string): Promise<void>;
  getAll(): Promise<Comment[]>;
}
