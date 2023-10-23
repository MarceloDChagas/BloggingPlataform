
import { IUserRepository } from './../../infrastructure/repositories/IUserRepository';

export class GetPostByUserUseCase {
    constructor(private userRepository: IUserRepository){}
    async executeGetPostByUser(id: string){
        const user = await this.userRepository.getAllPostsForUser(id);
        return user;
    }
}