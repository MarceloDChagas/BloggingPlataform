import { Comment } from "../entities/comment";

export class CommentValidator {
	static isNotValid(comment: Comment) {
		return comment.content === undefined || comment.content === null || comment.content === "";
	}
}