import { jest, describe, it, expect } from "@jest/globals";
import { CommentRepository } from "../use-cases/GlobalConfig";
import { GetCommentUseCase } from "../use-cases/getComment/GetCommentUseCase";

jest.mock("../use-cases/GlobalConfig");

describe("GetCommentUseCase", () => {
	it("should return an error because comment with this id don't exist", async () => {
		const getCommentUseCase = new GetCommentUseCase(CommentRepository);
		jest.spyOn(CommentRepository, "getById").mockResolvedValue(undefined);
		try {
			await getCommentUseCase.executeGetById("invalidId");
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
		} catch(error: any) {
			expect(error).toEqual(new Error("Comment not found"));
		}
	});
	it("should return an error because comment don't exist", async () => {
		const getCommentUseCase = new GetCommentUseCase(CommentRepository);
		jest.spyOn(CommentRepository, "getAll").mockResolvedValue(undefined);
		try {
			await getCommentUseCase.executeGetAll();
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
		} catch (error: any) {
			expect(error).toEqual(new Error("Comments not found"));
		}
	});
	it("should return all comments", async () => {
		const getCommentUseCase = new GetCommentUseCase(CommentRepository);
		jest.spyOn(CommentRepository, "getAll").mockResolvedValue([{_id: "123", content: "validContent1"}, {_id: "456", content: "validContent2"}]);
		const comments = await getCommentUseCase.executeGetAll();
		expect(comments).toEqual([{_id: "123", content: "validContent1"}, {_id: "456", content: "validContent2"}]);
	});
	it("should return a comment", async () => {
		const getCommentUseCase = new GetCommentUseCase(CommentRepository);
		jest.spyOn(CommentRepository, "getById").mockResolvedValue({_id: "validId", content: "validContent"});
		const comment = await getCommentUseCase.executeGetById("validId");
		expect(comment).toEqual({_id: "validId", content: "validContent"});
	});
}
);