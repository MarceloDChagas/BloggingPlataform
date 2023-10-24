import { ICommentDTO } from "./ICommentDTO";
import { Likes } from "./likes";

export class Comment {
	id?: string;
	content: string;
	likes?: Likes;

	constructor(data: ICommentDTO) {
		this.id = data.id;
		this.content = data.content;
	}
}
