import { UpdateUserUseCase } from "./UpdateUserUseCase";
import { Request, Response } from "express";

export class UpdateUserController {
	constructor(private updateUserUseCase: UpdateUserUseCase) {}
	async handleUpdateUser(req: Request, res: Response) {
		try {
			const { email } = req.params;
			const { username, name, age, password } = req.body;
			const user = await this.updateUserUseCase.executeUpdateUser(email, {
				username,
				name,
				age,
				email: req.body.email,
				password,
			});
			res.status(201).send({ message: "Usuário atualizado com sucesso!", user });
		} catch (error) {
			res.status(400).send({ message: "Erro ao atualizar usuário", error });
		}
	}
}
