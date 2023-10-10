import { IUserRepository } from "../../infrastructure/repositories/IUserRepository";

export class GetUserUseCase{
    constructor(private userRepository: IUserRepository){}

    async executeGetAllUser(){
        const users = await this.userRepository.getAll();
        return users;
    }
    
}