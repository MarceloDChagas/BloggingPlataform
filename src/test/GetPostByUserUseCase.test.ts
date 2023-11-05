import { jest, describe, it, expect } from "@jest/globals";
import { UserRepository } from "../use-cases/GlobalConfig";
import { GetPostByUserUseCase } from "../use-cases/getPostsByUser/getPostByUserUseCase";

jest.mock("../use-cases/GlobalConfig");

describe("GetPostByUserUseCase", () => {
	it("should return an error because user with this email don't exist", async () => {
		const getPostByUserUseCase = new GetPostByUserUseCase(
			UserRepository
		);
		try {
			await getPostByUserUseCase.executeGetPostByUser("invalidEmail@gmail.com");
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		} catch (error: any) {
			expect(error.message).toBe("User is not found");
		}
	}
	);

	it("should return an error because user with this email don't have posts", async () => {
		const getPostByUserUseCase = new GetPostByUserUseCase(
			UserRepository
		);
		jest.spyOn(UserRepository, "getAllPostsForUser").mockResolvedValue([]);
		try {
			await getPostByUserUseCase.executeGetPostByUser("validEmail@gmail.com");
		}
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		catch (error: any) {
			console.log(error.message);
			expect(error.message).toBe("User don't have posts");
		}
	}
	);

	it("should return all posts for user", async () => {
		const getPostByUserUseCase = new GetPostByUserUseCase(UserRepository);
		jest.spyOn(UserRepository, "getAllPostsForUser").mockResolvedValue([
			{_id: "validId", content: "validContent", title: "validTitle"}, 
			{_id: "validId2", content: "validContent2", title: "validTitle2"}]);
		const posts = await getPostByUserUseCase.executeGetPostByUser("validEmil@gmail.com");
		expect(posts).toEqual([
			{_id: "validId", content: "validContent", title: "validTitle"}, 
			{_id: "validId2", content: "validContent2", title: "validTitle2"}]);
	}); 
});
