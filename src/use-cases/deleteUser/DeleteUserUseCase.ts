import { IUserRepository } from "../../infrastructure/repositories/IUserRepository";

export class DeleteUserUseCase {
   constructor(private userRepository: IUserRepository) { }
    async executeDeleteUser(email:string): Promise<void> {
        const userAlreadyExists = await this.userRepository.findByEmail(email);
        if(!userAlreadyExists){
             throw new Error("User not even exists");
         }
        await this.userRepository.delete(email);
    }
}