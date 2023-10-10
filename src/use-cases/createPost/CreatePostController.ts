import { Request, Response } from "express";
import { CreateUserUseCase } from "../createUser/CreateUserUseCase";

export class CratePostController{
    constructor(private createUserUseCase: CreateUserUseCase){}
    async handle(req: Request, res: Response): Promise<Response>{
        const {name, username, age, email, password} = req.body;
        try{
            await this.createUserUseCase.executeCreateUser({name, username, age, email, password});
            return res.status(201).send();
        }catch(err){
            return res.status(400).json({
                message: err.message || "Unexpected error."
            })
        }
    }
}