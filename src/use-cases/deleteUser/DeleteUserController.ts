import { DeleteUserUseCase } from "./DeleteUserUseCase";
import {Request, Response} from "express";

export class DeleteUserController {
    constructor(private deleteUserUseCase: DeleteUserUseCase) { }
    async handleDeleteUser(req: Request, res: Response) {
        try {
            const { email } = req.params;
            await this.deleteUserUseCase.executeDeleteUser(email);
            res.status(201).send({ message: "Usuário deletado com sucesso!" });
        }
        catch (error: any) {
            res.status(400).send({ message: error.message });
        }
    }
}