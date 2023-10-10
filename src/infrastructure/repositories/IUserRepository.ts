import { User } from "../../entities/user";

export interface IUserRepository {
    create(user: User): Promise<void>;
    update(id: string, user: User): Promise<User> | null ;
    delete(id: string): Promise<User>;
    getAll(): Promise<User[]>;
    }