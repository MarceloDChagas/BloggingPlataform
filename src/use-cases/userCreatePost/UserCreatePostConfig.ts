import { UserCreatePostController } from "./UserCreatePostController";
import { UserCreatePostUseCase } from "./UserCreatePostUseCase";
import { User } from "../../entities/user";
import { PostRepository, UserRepository } from "../GlobalConfig";

const user = new User({
  name: "John Doe",
  username: "johndoe",
  age: 30,
  email: "johndoe@example.com",
  password: "password",
});

export const userCreatePostUseCase = new UserCreatePostUseCase(
  PostRepository,
  user
);
export const userCreatePostController = new UserCreatePostController(
  userCreatePostUseCase,
  UserRepository
);
