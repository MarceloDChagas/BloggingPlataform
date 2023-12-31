import { IlikeDTO } from "./ILikeDTO";

export class Likes {
	count: number;
	users?: string[];

	constructor(data: IlikeDTO){
		this.count = 0;
		this.users = data.users;
	}

	addLike(email: string): void {
		this.count++;
		if (this.users) {
			this.users.push(email);
		} else {
			this.users = [email];
		}
	}

	removeLike(email: string): void {
		this.count--;
		if (this.users) {
			const index = this.users.indexOf(email);
			if (index > -1) {
				this.users.splice(index, 1);
			}
		}
	}

	getLikes(): number {
		return this.count;
	}
}
