import { User } from "../../../../entities/user";
import { IUserRepository } from "../../IUserRepository";
import UserSchema  from "./User/UserSchema";


export class MongoDBUserRepository implements IUserRepository{
    async create(user: User): Promise<void> {
        try {
            const newUser = await UserSchema.create(user);
            console.log("Usuário criado com sucesso", newUser);
        } catch(err){
            console.error("Houve um erro ao criar o usuário", err);
            throw new Error("Erro ao criar o usuário");
        }
    }
    async update(id: string, user: User): Promise<User> {
        try {
            const updatedUser = await UserSchema.findByIdAndUpdate(id, user);
            console.log("Usuário atualizado com sucesso", updatedUser);
            return updatedUser as User;
        } catch(err) {
            console.error("Houve um erro ao atualizar o usuário", err);
            throw new Error("Erro ao atualizar o usuário");
        }
    }

    async delete(id: string): Promise<User> {
        try{
            const deletedUser = await UserSchema.findByIdAndDelete(id);
            console.log("Usuário deletado com sucesso", deletedUser);
            return deletedUser as User;
        } catch(err){
            console.error("Houve um erro ao deletar o usuário", err);
            throw new Error("Erro ao deletar o usuário");
        }
    }
    async getAll(): Promise<User[]> {
        try{
            const users = await UserSchema.find();
            console.log("Usuários encontrados com sucesso", users);
            return users as User[];
        } catch(err){
            console.error("Houve um erro ao buscar os usuários", err);
            throw new Error("Erro ao buscar os usuários");
        }
    }
}
