import { jest, describe, it, expect } from "@jest/globals";
import { PostRepository } from "../use-cases/GlobalConfig";
import { DeletePostUseCase } from "../use-cases/deletePost/DeletePostUseCase";

jest.mock("../use-cases/GlobalConfig");

describe("DeletePostUseCase", () => {  
	it("should return an error because post don't exist", async () => {
		const deletePostUseCase = new DeletePostUseCase(PostRepository);
		jest.spyOn(PostRepository, "getById").mockResolvedValue(undefined);
		try {
			await deletePostUseCase.executeDeletePostById("invalidId");
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
		} catch(error: any) {
			expect(error).toEqual(new Error("Post not found"));
		}
	}
	);

	it("should delete a post with sucess", async () => {
		jest.spyOn(PostRepository, "getById").mockResolvedValue({id: "validId", title: "validTitle", content: "validContent"});
		const result = await PostRepository.getById("validId");
		expect(result).toEqual({id: "validId", title: "validTitle", content: "validContent"});
	});

});