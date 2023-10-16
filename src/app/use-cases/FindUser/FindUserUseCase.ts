import { IUserRepository } from "../../repositories/IUserRepository";

export class FindUserUseCase {
  constructor(private userRepository: IUserRepository) {}

  async executeFindAllUsers() {
    try {
      const users = await this.userRepository.findAllUsers();
      return users;
    } catch (err) {
      throw new Error("Users not found");
    }
  }
}

export default FindUserUseCase;
