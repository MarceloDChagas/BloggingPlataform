import { ICommentDTO } from "./ICommentDTO";
import { Likes } from "./likes";
import crypto from "crypto";
export class Comment {
	_id?: string;
	content: string;
	likes?: Likes;

	constructor(data: ICommentDTO) {
		this._id = crypto.randomBytes(16).toString("hex");
		this.content = data.content;
	}
}
