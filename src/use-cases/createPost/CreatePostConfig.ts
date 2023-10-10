import { MongoDBPostRepository } from "../../infrastructure/repositories/database/MongoDB/mongoDB.PostRepository";
import { CreatePostUseCase } from "./CreatePostUseCase";
import { CreatePostController } from "./CreatePostController";

const createPostUseCase = new CreatePostUseCase(new MongoDBPostRepository);
const createPostController = new CreatePostController(createPostUseCase);