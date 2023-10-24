import { MongoDBCommentRepository } from "../infrastructure/repositories/database/MongoDB/mongoDB.CommentRepository";
import { MongoDBPostRepository } from "../infrastructure/repositories/database/MongoDB/mongoDB.PostRepository";
import { MongoDBUserRepository } from "../infrastructure/repositories/database/MongoDB/mongoDB.UserRepository";

export const UserRepository = new MongoDBUserRepository();
export const PostRepository = new MongoDBPostRepository();
export const CommentRepository = new MongoDBCommentRepository();