import { GetPostByUserUseCase } from "./getPostByUserUseCase";
import { Request, Response } from "express";

export class GetPostByUserController {
	constructor(private getPostByUserUseCase: GetPostByUserUseCase) {
	}
	async handleGetPostByUser(req: Request, res: Response) {
		const { id } = req.params;
		const user = await this.getPostByUserUseCase.executeGetPostByUser(id);
		return res.status(200).send(user);
	}
}