import { Post } from "../../../../entities/post";
import { User } from "../../../../entities/user";
import { IUserRepository } from "../../IUserRepository";
import PostSchema from "./Post/PostSchema";
import UserSchema from "./User/UserSchema";

export class MongoDBUserRepository implements IUserRepository {
  async create(user: User): Promise<void> {
    try {
      const newUser = await UserSchema.create(user);
      console.log("Usuário criado com sucesso", newUser);
    } catch (err) {
      console.error("Houve um erro ao criar o usuário", err);
      throw new Error("Erro ao criar o usuário");
    }
  }
  async update(id: string, user: User): Promise<void> {
    try {
      const updatedUser = await UserSchema.findByIdAndUpdate(id, user);
      console.log("Usuário atualizado com sucesso", updatedUser);
    } catch (err) {
      console.error("Houve um erro ao atualizar o usuário", err);
      throw new Error("Erro ao atualizar o usuário");
    }
  }

  async delete(email: string): Promise<void> {
    try {
      const deletedUser = await UserSchema.findByIdAndDelete(email);
      console.log("Usuário deletado com sucesso", deletedUser);
    } catch (err) {
      console.error("Houve um erro ao deletar o usuário", err);
      throw new Error("Erro ao deletar o usuário");
    }
  }
  async getAll(): Promise<User[]> {
    try {
      const users = await UserSchema.find();
      console.log("Usuários encontrados com sucesso", users);
      return users as any as User[];
    } catch (err) {
      console.error("Houve um erro ao buscar os usuários", err);
      throw new Error("Erro ao buscar os usuários");
    }
  }
  async findByEmail(email: string): Promise<User | null> {
    try {
      const user = await UserSchema.findOne({ email });
      if (!user) {
        return null;
      }
      return user as any as User;
    } catch (err) {
      console.error("Houve um erro ao buscar o usuário por email", err);
      throw new Error("Erro ao buscar o usuário por email");
    }
  }
  async addPost(userEmail: string, post: Post): Promise<void> {
    try {
      const user = await UserSchema.findOne({ email: userEmail })
      if (!user) {
        throw new Error("Usuário não encontrado");
      }
      const newPost = new PostSchema({
        title: post.title,
        content: post.content,
        user: userEmail,
      });
      await newPost.save();
      user.posts.push(newPost._id);
      await user.save();
      console.log("Post adicionado com sucesso", user);
    } catch (err) {
      console.error("Houve um erro ao adicionar o post", err);
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
      console.log("Posts encontrados com sucesso", posts);
      return posts;
    }catch(err){
      console.error("Houve um erro ao buscar os posts", err);
      throw new Error("Erro ao buscar os posts");
    }
  }

}
