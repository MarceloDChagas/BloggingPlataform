import { IUserRepository } from "../../infrastructure/repositories/IUserRepository";

export class GetUserUseCase{
	constructor(private userRepository: IUserRepository){}

	async executeGetAllUser(){
		const users = await this.userRepository.getAll();
		if(!users){
			throw new Error("Users not found");
		}
		return users;
	}

	async executeGetUserByEmail(email: string){
		const user = await this.userRepository.findByEmail(email);
		if(!user){
			throw new Error("User not found");
		}
		return user;
	}
    
}