import { Post } from "../entities/post";

export class PostValidator {
	static isNotValid(post: Post): boolean {
		return post.title === undefined || post.title === null || post.title === "" || post.content === undefined || post.content === null || post.content === "";
	}
}