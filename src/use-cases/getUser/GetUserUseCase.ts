import { IUserRepository } from "../../infrastructure/repositories/IUserRepository";

export class GetUserUseCase{
	constructor(private userRepository: IUserRepository){}

	async executeGetAllUser(){
		const users = await this.userRepository.getAll();
		if(!users){
			return [];
		}
		return users;
	}

	async executeGetUserByEmail(email: string){
		const user = await this.userRepository.findByEmail(email);
		if(!user){
			return [];
		}
		return user;
	}
    
}