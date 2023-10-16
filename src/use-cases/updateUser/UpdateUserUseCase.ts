import { IUserDTO } from "../../entities/IUserDTO";
import { IUserRepository } from "../../infrastructure/repositories/IUserRepository";

export class UpdateUserUseCase {
    constructor(private userRepository: IUserRepository) {}
    async executeUpdateUser(id: string, data: IUserDTO): Promise<any> {
        const user = await this.userRepository.update(id, data);
        return user;
    }
}