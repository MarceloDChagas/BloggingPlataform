
import { IUserRepository } from "./../../infrastructure/repositories/IUserRepository";

export class GetPostByUserUseCase {
	constructor(private userRepository: IUserRepository){}
	async executeGetPostByUser(email: string){
		const user = await this.userRepository.getAllPostsForUser(email);
		if(!user){
			throw new Error("User is not found");
		}
		if(user.length === 0){
			throw new Error("User don't have posts");
		}
		return user;
	}
}