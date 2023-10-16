import { IUserDTO } from "../../entities/IUserDTO";
import { IUserRepository } from "../../infrastructure/repositories/IUserRepository";

export class DeleteUserUseCase {
   constructor(private userRepository: IUserRepository) { }
    async executeDeleteUser(data: string): Promise<void> {
        // const userAlreadyExists = await this.userRepository.findByEmail(data.email);
        // if(userAlreadyExists){
        //     throw new Error("User already exists");
        // }
        await this.userRepository.delete(data);
    }
}