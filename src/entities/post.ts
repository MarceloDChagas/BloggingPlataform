import { IPostDTO } from "./IPostDTO";
import { Likes } from "./likes";

export class Post {
	title: string;
	content: string;
	comments?: string[];
	id?: string;
	likes?: Likes;

	constructor(data: IPostDTO, comments?: string[]) {
		this.title = data.title;
		this.content = data.content;
		if (comments) {
			this.comments = comments;
		}
		this.id = data.id;
	}
}

