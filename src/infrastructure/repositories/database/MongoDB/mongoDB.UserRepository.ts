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
			throw new Error("Erro ao criar o usuário");
		}
	}


	async update(email: string, user: User): Promise<void> {
		try {
			await UserSchema.findByIdAndUpdate(email, user);
		} catch (err) {
			throw new Error("Erro ao atualizar o usuário");
		}
	}

	async delete(email: string): Promise<void> {
		try {
			await UserSchema.findOneAndDelete({ email });
		} catch (err) {
			throw new Error("Erro ao deletar o usuário");
		}
	}
	async getAll(): Promise<User[]> {
		try {
			const users = await UserSchema.find();
			return users.map((user) => user.toObject()) as User[];
		} catch (err) {
			throw new Error("Erro ao buscar os usuários");
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
			throw new Error("Erro ao buscar o usuário por id");
		}
	}

	//Metodo para buscar o usuário por email, é usado por outros métodos e não um endpoint
	async findByEmail(email: string): Promise<User | null> {
		try {
			const user = await UserSchema.findOne({ email });
			if (!user) {
				return null;
			}
			return user.toObject() as User;
		} catch (err) {
			throw new Error("Erro ao buscar o usuário por email");
		}
	}
  
	async addPost(userEmail: string, post: Post): Promise<void> {
		try {
			const user = await UserSchema.findOne({ email: userEmail });
			if (!user) {
				throw new Error("Usuário não foi encontrado");
			}
			const newPost = new PostSchema({
				title: post.title,
				content: post.content,
				user: user._id, 
			});
			await newPost.save();
			user.posts.push(newPost._id);
			await user.save();
		} catch (err) {
			throw new Error("Erro ao adicionar o post");
		}
	}

	async getAllPostsForUser(userEmail: string): Promise<Post[]> {
		try {
			const email = await UserSchema.find({ email: userEmail });
			if (!email) {
				throw new Error("Email não encontrado");
			}
			const posts: Post[] = await PostSchema.find({ user: userEmail });
			return posts;
		}catch(err){
			throw new Error("Erro ao buscar os posts");
		}
	}
}
