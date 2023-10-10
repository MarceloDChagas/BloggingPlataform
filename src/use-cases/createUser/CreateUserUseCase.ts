import { IUserDTO } from "../../entities/IUserDTO";
import { User } from "../../entities/user";
import { IUserRepository } from "../../infrastructure/repositories/IUserRepository";

export class CreateUserUseCase {
    constructor(private userRepository: IUserRepository) {}
    async executeCreateUser(data: IUserDTO) : Promise<void>{
        // const userAlreadyExists = await this.userRepository.findByEmail(data.email);
        // if(userAlreadyExists){
        //     throw new Error("User already exists");
        // }
        const user = new User(data);
        await this.userRepository.create(user);
    }
}
