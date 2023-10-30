import { Post } from "../../../../entities/post";
import { User } from "../../../../entities/user";
import { IUserRepository } from "../../IUserRepository";
import PostSchema from "./Post/PostSchema";
import UserSchema from "./User/UserSchema";
export class MongoDBUserRepository implements IUserRepository {
	async create(user: User): Promise<void> {
		try {
			await UserSchema.create(user); 
		} catch (err) {
			throw new Error(`Erro ao criar o usuário no banco de dados MongoDB: ${(err as Error).message}`);
		}
	}


	async update(email: string, user: User): Promise<void> {
		try {
			await UserSchema.findOneAndUpdate({ email }, user);
		} catch (err) {
			throw new Error(`Erro ao atualizar o usuário no banco de dados MongoDB: ${(err as Error).message}`);
		}
	}

	async delete(email: string): Promise<void> {
		try {
			await UserSchema.findOneAndDelete({ email });
		} catch (err) {
			throw new Error("Erro ao deletar o usuário no banco de dados MongoDB");
		}
	}
	async getAll(): Promise<User[]> {
		try {
			const users = await UserSchema.find();
			return users.map((user) => user.toObject()) as User[];
		} catch (err) {
			throw new Error("Erro ao buscar os usuários no banco de dados MongoDB");
		}
	}

	async findById(id: string): Promise<User | null> {
		try {
			const user = await UserSchema.findById(id);
			if (!user) {
				return null;
			}
			return user.toObject() as User;
		} catch (err) {
			throw new Error("Erro ao buscar o usuário por id no banco de dados MongoDB");
		}
	}

	async findByEmail(email: string): Promise<User | null> {
		try {
			const user = await UserSchema.findOne({ email });
			if (!user) {
				return null;
			}
			return user.toObject() as User;
		} catch (err) {
			throw new Error("Erro ao buscar o usuário por email no banco de dados MongoDB");
		}
	}
  
	async addPost(userEmail: string, post: Post): Promise<void> {
		try {
			const user = await UserSchema.findOne({ email: userEmail });
			if (!user) {
				throw new Error("Usuário não foi encontrado no banco de dados MongoDB");
			}
			if(!post._id){
				throw new Error("Post não foi encontrado no banco de dados MongoDB");
			}
			user.posts.push(post._id);
			await user.save();
			return;
		} catch (err) {
			throw new Error(`Erro ao salvar o usuário no banco de dados MongoDB: ${(err as Error).message}`);
		}
		
	}

	async getAllPostsForUser(userEmail: string): Promise<Post[]> {
		try {
			const email = await UserSchema.find({ email: userEmail });
			if (!email) {
				throw new Error("Email não encontrado no banco de dados MongoDB");
			}
			const posts: Post[] = await PostSchema.find({ user: userEmail });
			return posts;
		}catch(err){
			throw new Error("Erro ao buscar os posts no banco de dados MongoDB");
		}
	}
}
