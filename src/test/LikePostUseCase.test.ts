import { jest, describe, it, expect } from "@jest/globals";
import { PostRepository, UserRepository } from "../use-cases/GlobalConfig";
import { LikePostUseCase } from "../use-cases/likePost/LikePostUseCase";
import { Likes } from "../entities/likes";

jest.mock("../use-cases/GlobalConfig");
jest.mock("../entities/Likes");

describe("LikePostUseCase", () => {
	it("should return an error because post with this id don't exist", async () => {
		const likePostUseCase = new LikePostUseCase(
			PostRepository,
			UserRepository
		);
		jest.spyOn(PostRepository, "getById").mockResolvedValue(undefined);
		try {
			await likePostUseCase.executeLikePost("invalidId", "validEmail@gmail.com");
		}
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		catch (error: any) {
			expect(error.message).toBe("Post not found");
		}
	}
	);
	it("should return an error because user with this email don't exist", async () => {
		const likePostUseCase = new LikePostUseCase(
			PostRepository,
			UserRepository
		);
		jest.spyOn(PostRepository, "getById").mockResolvedValue({_id: "validId", content: "validContent", title: "validTitle"});
		jest.spyOn(UserRepository, "findByEmail").mockResolvedValue(undefined);
		try {
			await likePostUseCase.executeLikePost("validId", "invalidEmail@gmail.com");
		}
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		catch (error: any) {
			expect(error.message).toBe("User not found");
		}
	}
	);

	it("should return an error because user already liked this post", async () => {
		const likePostUseCase = new LikePostUseCase(
			PostRepository,
			UserRepository
		);
		jest.spyOn(PostRepository, "getById").mockResolvedValue({
			_id: "validId",
			content: "validContent",
			title: "validTitle",
		});
		jest.spyOn(UserRepository, "findByEmail").mockResolvedValue({
			name: "validName",
			email: "validEmail",
			password: "validPassword",
			username: "validUsername",
			age: 20,
		});
		jest.spyOn(PostRepository, "userAlreadyLiked").mockResolvedValue(true);
		try {
			await likePostUseCase.executeLikePost("validId", "validEmail");
		} //eslint-disable-next-line @typescript-eslint/no-explicit-any
		catch (error: any) {
			expect(error.message).toBe("User already liked this post");
		}

	});

	it("should return an error because user not liked this post", async () => {
		const likePostUseCase = new LikePostUseCase(
			PostRepository,
			UserRepository
		);
		jest.spyOn(PostRepository, "getById").mockResolvedValue({_id: "validId", content: "validContent", title: "validTitle"});
		jest.spyOn(UserRepository, "findByEmail").mockResolvedValue({name: "validName", email: "validEmail", 
			password: "validPassword", username: "validUsername", age: 20});
		jest.spyOn(PostRepository, "userAlreadyLiked").mockResolvedValue(false);
		try {
			await likePostUseCase.executeDeslikePost("validId", "validEmail");
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		}catch(error:any){
			expect(error.message).toBe("User not liked this post");
		}
	}
	);

	it("should return the number of likes of a post", async () => {
		const likePostUseCase = new LikePostUseCase(
			PostRepository,
			UserRepository
		);
		jest.spyOn(PostRepository, "getById").mockResolvedValue({_id: "validId", content: "validContent", title: "validTitle", likes: {count: 0, users: []}});
		jest.spyOn(UserRepository, "findByEmail").mockResolvedValue({name: "validName", email: "validEmail", 
			password: "validPassword", username: "validUsername", age: 20});
		jest.spyOn(PostRepository, "userAlreadyLiked").mockResolvedValue(false);
		const [post, user] = await likePostUseCase.executeLikePost("validId", "validEmail");
		const numberLikes = post.likes?.getLikes();
		console.log("Entrou aqui",numberLikes);
		expect(post.likes?.getLikes()).toEqual(1);
		expect(user).toBe("validEmail");	
	}
	);


});