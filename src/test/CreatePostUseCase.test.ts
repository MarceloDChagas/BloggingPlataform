import { jest, describe, expect, it } from "@jest/globals";
import { CreatePostUseCase } from "../use-cases/createPost/CreatePostUseCase";
import { PostRepository } from "../use-cases/GlobalConfig";

jest.mock("../use-cases/GlobalConfig");

describe("CreatePostUseCase", () => {
	it("should create post", async () => {
		const createPostUseCase = new CreatePostUseCase(PostRepository);

		const post = await createPostUseCase.executeCreatePost({
			title: "Post Title",
			content: "Post Content",   
		});

		expect(PostRepository.createPost).toHaveBeenCalledWith(post);
	});
});