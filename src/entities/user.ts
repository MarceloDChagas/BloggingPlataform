import { IUserDTO } from "./IUserDTO";
import { Post } from "./post";
import crypto from "crypto";
export class User{
	_id?: string;
	name: string;
	username: string;
	age: number;
	email: string;
	password: string;
	posts?: Post[];
	likedPosts?: Post[];

	constructor(data: IUserDTO){
		this.name = data.name;
		this.username = data.username;
		this.age = data.age;
		this.email = data.email;
		this.password = data.password;
		this._id = crypto.randomBytes(16).toString("hex"); 
		this.posts = [];
		this.likedPosts = [];
	}
}