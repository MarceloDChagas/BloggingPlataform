import { DeleteUserUseCase } from "./DeleteUserUseCase";
import {Request, Response} from "express";

export class DeleteUserController {
	constructor(private deleteUserUseCase: DeleteUserUseCase) { }
	async handleDeleteUserByEmail(req: Request, res: Response) {
		const { email } = req.params;
		await this.deleteUserUseCase.executeDeleteUserByEmail(email);
		res.status(201).send({ message: "Usuário deletado com sucesso!" });
	}
}