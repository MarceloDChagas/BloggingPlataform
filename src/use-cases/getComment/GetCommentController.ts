import { GetCommentUseCase } from "./GetCommentUseCase";
import { Request, Response } from "express";

export class GetCommentController {
	constructor(private getCommentUseCase: GetCommentUseCase) {}
	async handleGetAllComments(_request: Request, response: Response) {
		const comments = await this.getCommentUseCase.executeGetAll();
		console.log(comments);
		return response.status(200).json(comments);
	}
}