import { IUserRepository } from "../../repositories/IUserRepository";
import { ICreateUserDTO } from "./CreateUserDTO";
import { User } from "./User";

export class CreateUserUseCase {
  constructor(private userRepository: IUserRepository) {}

  async executeCreateUser(data: ICreateUserDTO) {
    //const userAlreadyExists = await this.userRepository.findByEmail(data.email);
    //if (userAlreadyExists) {
    //throw new Error("User already exists");
    //}
    const user = new User(data);
    await this.userRepository.saveUser(user);
  }
}
