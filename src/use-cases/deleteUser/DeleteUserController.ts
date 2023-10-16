import { DeleteUserUseCase } from "./DeleteUserUseCase";
import {Request, Response} from "express";

export class DeleteUserController {
    constructor(private deleteUserUseCase: DeleteUserUseCase) { }
    async handle(req: Request, res: Response) {
        try {
            const { id } = req.params;
            await this.deleteUserUseCase.executeDeleteUser(id);
            res.status(201).send({ message: "Usuário deletado com sucesso!" });
        }
        catch (error: any) {
            res.status(400).send({ message: error.message });
        }
    }
}