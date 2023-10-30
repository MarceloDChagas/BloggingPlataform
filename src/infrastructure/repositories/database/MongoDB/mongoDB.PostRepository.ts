import { Post } from "../../../../entities/post";
import { IPostRepository } from "../../IPostRepository";
import PostSchema from "./Post/PostSchema";
import { Comment } from "../../../../entities/comment";
import CommentSchema from "./Comment/CommentSchema";
import { PostRepository } from "../../../../use-cases/GlobalConfig";

export class MongoDBPostRepository implements IPostRepository {
	async createPost(post: Post): Promise<Post> {
		try {
			const newPost = await PostSchema.create(post);
			return newPost.toObject() as Post;
		} catch (err) {
			
			throw new Error("Erro ao criar o post");
		}
	}

  
	async updatePost(id: string, post: Post): Promise<void> {
		try {
			await PostSchema.findByIdAndUpdate(id, post);
		} catch (err) {
			throw new Error("Erro ao atualizar o post");
		}
	}
	async deletePost(id: string): Promise<void> {
		try {
			await PostSchema.findByIdAndDelete(id);
		} catch (err) {
			throw new Error("Erro ao deletar o post");
		}
	}
	async getAllPosts(): Promise<Post[]> {
		try {
			const posts = await PostSchema.find();
			return posts.map((post) => ({
				...post.toObject(),
				id: post._id.toString(),
				comments: post.comments.map((comment) => comment.toString()),
			})) as Post[];
		} catch (err) {
			throw new Error("Erro ao buscar os posts");
		}
	}
  
	async getById(id: string): Promise<Post | null> {
		try {
			const post = await PostSchema.findById(id);
			if (!post) {
				return null;
			}
			return {
				...post.toObject(),
				id: post._id.toString(),
				comments: post.comments.map((comment) => comment.toString()),
			} as Post;
		} catch (err) {
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
			post.comments.push(postId);
			await post.save();
		} catch (err) {
			throw new Error("Erro ao adicionar o comentário");
		}
	}

	async likePost(postAndUserEmail: [Post, string]): Promise<void> {
		try {
			if (postAndUserEmail[0].id === undefined) {
				throw new Error("Email do usuário não pode ser undefined");
			}
			postAndUserEmail[0].likes?.addLike(postAndUserEmail[1]);
			await PostRepository.updatePost(postAndUserEmail[0].id, postAndUserEmail[0]);
		} catch (err) {
			throw new Error("Erro ao curtir o post");
		}
	}
}