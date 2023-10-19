import { GetUserUseCase } from "./GetUserUseCase";
import {Request, Response} from 'express';

export class GetUserController {
    constructor(private getUserUseCase: GetUserUseCase) {}
    async handleGetAllUser(_req: Request, res: Response) {
        const users = await this.getUserUseCase.executeGetAllUser();
        res.status(200).json(users);
        return users;
    }
}