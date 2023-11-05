import { GetPostByUserUseCase } from "./getPostByUserUseCase";
import { Request, Response } from "express";

export class GetPostByUserController {
	constructor(private getPostByUserUseCase: GetPostByUserUseCase) {
	}
	async handleGetPostByUser(req: Request, res: Response) {
		const { email } = req.params;
		const user = await this.getPostByUserUseCase.executeGetPostByUser(email);
		return res.status(200).send(user);
	}
}