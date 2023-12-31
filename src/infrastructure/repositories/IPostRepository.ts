import { Post } from "../../entities/post";
import { Comment } from "../../entities/comment";

export interface IPostRepository {
  addComment(postId: string, comment: Comment): Promise<void>;
  createPost(post: Post): Promise<Post>;
  getAllPosts(): Promise<Post[]>;
  updatePost(id: string, post: Post): Promise<void>;
  deletePost(id: string): Promise<void>;
  getById(id: string): Promise<Post | undefined>;    
  likePost(postAndUserEmail: [Post, string]): Promise<void>;
  deslikePost(postAndUserEmail: [Post, string]): Promise<void>;
  userAlreadyLiked(postAndUserEmail: [Post, string]): Promise<boolean>;
}
