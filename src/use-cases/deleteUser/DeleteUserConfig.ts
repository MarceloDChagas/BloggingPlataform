import { MongoDBUserRepository } from '../../infrastructure/repositories/database/MongoDB/mongoDB.UserRepository';
import { DeleteUserController } from './DeleteUserController';
import { DeleteUserUseCase } from './DeleteUserUseCase';

export const deleteUserUseCase = new DeleteUserUseCase(new MongoDBUserRepository);
export const deleteUserController = new DeleteUserController(deleteUserUseCase);