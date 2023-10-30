import { User } from "../../entities/user";
import { IUserDTO } from "../../entities/IUserDTO";
import { IUserRepository } from "../../infrastructure/repositories/IUserRepository";

export class UpdateUserUseCase {
	constructor(private userRepository: IUserRepository) {}
	async executeUpdateUser(email: string, data: IUserDTO): Promise<User | null> {
		const user = await this.userRepository.update(email, data);
		if (!user) {
			return null;
		}
		return user;
	}
}