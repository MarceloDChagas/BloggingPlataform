import { Request, Response } from "express";
import { CreateUserUseCase } from "./CreateUserUseCase";
import { UserValidators } from "../../validators/UserValidators";
export class CreateUserController {
	constructor(private createUserUseCase: CreateUserUseCase) {
	}
	async handleCreateUser(req: Request, res: Response) {
		try {
			const { name, username, age, email, password } = req.body;
			UserValidators.isNotValid({ name, username, age, email, password });
			const hashedPassword = await UserValidators.hashPassword(password);
			await this.createUserUseCase.executeCreateUser({
				name,
				username,
				age,
				email,  	
				password: hashedPassword
			});
			return res.status(201).send({"message": "Usuário criado com sucesso!"});
		} catch (error) {
			return res.status(400).send({"message": "Erro ao criar usuário"});
		}
	}
}