import { IUserDTO } from "./IUserDTO";
import { Post } from "./post";

export class User{
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
        
	}
}