import { MongoDBPostRepository } from "../../infrastructure/repositories/database/MongoDB/mongoDB.PostRepository";
import { MongoDBUserRepository } from "../../infrastructure/repositories/database/MongoDB/mongoDB.UserRepository";
import { UserCreatePostController } from "./UserCreatePostController";
import { UserCreatePostUseCase } from "./UserCreatePostUseCase";
import { User } from "../../entities/user";

const user = new User({
  name: "John Doe",
  username: "johndoe",
  age: 30,
  email: "johndoe@example.com",
  password: "password",
});

export const userCreatePostUseCase = new UserCreatePostUseCase(
  new MongoDBPostRepository(),
  user
);
export const userCreatePostController = new UserCreatePostController(
  userCreatePostUseCase,
  new MongoDBUserRepository()
);
