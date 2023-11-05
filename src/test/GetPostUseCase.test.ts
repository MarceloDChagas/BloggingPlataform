import { jest, describe, it, expect } from "@jest/globals";
import { GetPostUseCase } from "../use-cases/getPost/GetPostUseCase";
import { PostRepository } from "../use-cases/GlobalConfig";

jest.mock("../use-cases/GlobalConfig");

describe("GetPostUseCase", () => {
	it("should return an error because don't have any posts", async () => {
		const getPostUseCase = new GetPostUseCase(PostRepository);
		try{
			await getPostUseCase.executeGetAllPosts();
		}catch(error){
			expect(error).toEqual(new Error("Don't have any posts"));
		}}
	);
	it("should return an error because don't have any posts with the id", async () => {
		const getPostUseCase = new GetPostUseCase(PostRepository);
		try{
			await getPostUseCase.executeGetPostById("1");
		}catch(error){
			expect(error).toEqual(new Error("Don't have any posts with this id"));
		}});

	it("should return an array with one post", async () => {
		PostRepository.createPost({
			title: "post",
			content: "content",
		});

		jest.spyOn(PostRepository, "getAllPosts").mockResolvedValue([{title: "post", content: "content"}]);
        
		const result = await PostRepository.getAllPosts();
		expect(result).toEqual([{title: "post", content: "content"}]);

	});

	it("should return an array with one post find by Id", async () => {
		PostRepository.createPost({
			title: "post",
			content: "content",
		});
		jest.spyOn(PostRepository, "getById").mockResolvedValue({title: "post", content: "content"});
		const result = await PostRepository.getById("1");
		expect(result).toEqual({title: "post", content: "content"});
	}
	);
});