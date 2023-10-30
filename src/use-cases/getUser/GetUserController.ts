import { GetUserUseCase } from "./GetUserUseCase";
import {Request, Response} from "express";

export class GetUserController {
	constructor(private getUserUseCase: GetUserUseCase) {}
	async handleGetAllUser(_req: Request, res: Response) {
		try {
			const users = await this.getUserUseCase.executeGetAllUser();
			res.status(200).json(users);
			return users;
		} catch (error) {
			res.status(404).send("Erro ao buscar usuários");
		}
	}
	async handleGetUserByEmail(req: Request, res: Response) {
		try {
			const { email } = req.params;
			const user = await this.getUserUseCase.executeGetUserByEmail(email);
			res.status(200).json(user);
			return user;
		} catch (error) {
			res.status(404).send("Erro ao buscar usuário");
		}
	}
}
