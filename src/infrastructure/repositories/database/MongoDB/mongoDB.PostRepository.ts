import { Post } from "../../../../entities/post";
import { IPostRepository } from "../../IPostRepository";
import PostSchema from "./Post/PostSchema";
import { Comment } from "../../../../entities/comment";
import CommentSchema from "./Comment/CommentSchema";

export class MongoDBPostRepository implements IPostRepository {
  async createPost(post: Post): Promise<Post> {
    try {
      const newPost = await PostSchema.create(post);
      console.log("Post criado com sucesso", newPost);
      return {
        ...newPost.toObject(),
        id: newPost._id.toString(),
        comments: newPost.comments.map((comment) => comment.toString()),
      } as Post;
    } catch (err) {
      console.error("Houve um erro ao criar o post", err);
      throw new Error("Erro ao criar o post");
    }
  }
  async updatePost(id: string, post: Post): Promise<void> {
    try {
      const updatedPost = await PostSchema.findByIdAndUpdate(id, post);
      console.log("Post atualizado com sucesso", updatedPost);
    } catch (err) {
      console.error("Houve um erro ao atualizar o post", err);
      throw new Error("Erro ao atualizar o post");
    }
  }
  async deletePost(id: string): Promise<void> {
    try {
      const deletedPost = await PostSchema.findByIdAndDelete(id);
      console.log("Post deletado com sucesso", deletedPost);
    } catch (err) {
      console.error("Houve um erro ao deletar o post", err);
      throw new Error("Erro ao deletar o post");
    }
  }
  async getAllPosts(): Promise<Post[]> {
    try {
      const posts = await PostSchema.find();
      console.log("Posts encontrados com sucesso", posts);
      return posts.map((post) => ({
        ...post.toObject(),
        id: post._id.toString(),
        comments: post.comments.map((comment) => comment.toString()),
      })) as Post[];
    } catch (err) {
      console.error("Houve um erro ao buscar os posts", err);
      throw new Error("Erro ao buscar os posts");
    }
  }

  async getById(id: string): Promise<Post> {
    try {
      const post = await PostSchema.findById(id);
      console.log("Post encontrado com sucesso", post);
      if (!post) {
        throw new Error("Post não encontrado");
      }
      return {
        ...post.toObject(),
        id: post._id.toString(),
        comments: post.comments.map((comment) => comment.toString()),
      } as Post;
    } catch (err) {
      console.error("Houve um erro ao buscar o post", err);
      throw new Error("Erro ao buscar o post");
    }
  }
  
  async addComment(postId: string, comment: Comment): Promise<void> {
    try {
      const post = await PostSchema.findById(postId);
      if (!post) {
        throw new Error("Post não encontrado");
      }
      const newComment = new CommentSchema({
        content: comment.content,
        post: postId,
      });
      await newComment.save();
      post.comments.push(newComment._id);
      await post.save();
      console.log("Comentário adicionado com sucesso", post);
    } catch (err) {
      console.error("Houve um erro ao adicionar o comentário", err);
      throw new Error("Erro ao adicionar o comentário");
    }
  }
}
