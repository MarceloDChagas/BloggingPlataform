import { Post } from "../../../../entities/post";
import { IPostRepository } from "../../IPostRepository";
import PostSchema from "./Post/PostSchema";
 

export class MongoDBPostRepository implements IPostRepository{
   async createPost(post: Post): Promise<void> {
       try {
        const newPost = await PostSchema.create(post);
        console.log("Post criado com sucesso", newPost);
         } catch(err){
        console.error("Houve um erro ao criar o post", err);
        throw new Error("Erro ao criar o post");
         }
       }
   async updatePost(id: string, post: Post): Promise<void> {
         try {
          const updatedPost = await PostSchema.findByIdAndUpdate(id, post);
          console.log("Post atualizado com sucesso", updatedPost);
            } catch(err) {
          console.error("Houve um erro ao atualizar o post", err);
          throw new Error("Erro ao atualizar o post");
            }
         }
    async deletePost(id: string): Promise<void> {
            try{
            const deletedPost = await PostSchema.findByIdAndDelete(id);
            console.log("Post deletado com sucesso", deletedPost);
            } catch(err){
            console.error("Houve um erro ao deletar o post", err);
            throw new Error("Erro ao deletar o post");
                }
            }
    async getAllPosts(): Promise<Post[]> {
            try{
            const posts = await PostSchema.find();
            console.log("Posts encontrados com sucesso", posts);
            return posts as Post[];
                } catch(err){
            console.error("Houve um erro ao buscar os posts", err);
            throw new Error("Erro ao buscar os posts");
        }
    }
}
