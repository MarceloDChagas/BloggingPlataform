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

	constructor(data: IPostDTO, comments?: string[], likes?: Likes) {
		this.title = data.title;
		this.content = data.content;
		if (comments) {
			this.comments = comments;
		}
		if(likes){
			this.likes = likes;
		}
		this._id = crypto.randomBytes(16).toString("hex");
	}
}

