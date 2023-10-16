import { Post } from "../../entities/post";
import { User } from "../../entities/user";

export interface IUserRepository {
    create(user: User): Promise<void>;
    update(id: string, user: User): Promise<void> | null ;
    delete(id: string): Promise<void>;
    getAll(): Promise<User[]>;
    findByEmail(email: string): Promise<User | null>;
    addPost(postId: string, post: Post): Promise<void>;
    
    }