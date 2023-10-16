import { User } from "../use-cases/CreateUser/User";

export interface IUserRepository {
  findByEmail(email: string): Promise<User | null>;
  saveUser(user: User): Promise<void>;
  findAllUsers(): Promise<User[] | null>;
}
