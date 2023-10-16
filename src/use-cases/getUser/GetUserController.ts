import { GetUserUseCase } from "./GetUserUseCase";
import {Request, Response} from 'express';

export class GetUserController {
    constructor(private getUserUseCase: GetUserUseCase) {}
    async handleGetAllUser(req: Request, res: Response) {
        const users = await this.getUserUseCase.executeGetAllUser();
        return users;
    }
}