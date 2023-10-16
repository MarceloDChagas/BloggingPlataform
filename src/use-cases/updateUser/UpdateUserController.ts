import { UpdateUserUseCase } from "./UpdateUserUseCase";
import { Request, Response } from "express";

export class UpdateUserController {
  constructor(private updateUserUseCase: UpdateUserUseCase) {}
  async handle(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const { username, name, age, email, password } = req.body;
      const user = await this.updateUserUseCase.executeUpdateUser(id, {
        username,
        name,
        age,
        email,
        password,
      });
      res
        .status(201)
        .send({ message: "Usuário atualizado com sucesso!", user });
    } catch (error: any) {
      res.status(400).send({ message: error.message });
    }
  }
}
