
import { Post } from "../../entities/post";

export interface IPostRepository {
    savePost(post: Post): Promise<void>;
    getAllPosts(): Promise<Post[]>;
    updatePost(id: string, post: Post): Promise<void>;
    deletePost(id: string): Promise<void>;
}