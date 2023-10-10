import { Request, Response } from "express";
import { CreateUserUseCase } from "./CreateUserUseCase";

export class CreateUserController {
    constructor(private createUserUseCase: CreateUserUseCase) {
    }
    async handle(req: Request, res: Response) {
        const { name, username, age, email, password } = req.body;
        try {
            await this.createUserUseCase.executeCreateUser({
                name,
                username,
                age,
                email,
                password
            });
            return res.status(201).send();
        }
        catch (error : any) {
            return res.status(400).json({
                message: error.message || 'Unexpected error.'
            });
        }
    }
}