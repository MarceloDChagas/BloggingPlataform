import { IPostDTO } from "./IPostDTO";
import { Likes } from "./likes";
import crypto from "crypto";
export class Post {
	_id?: string;
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
		this._id = crypto.randomBytes(16).toString("hex");
	}
}

