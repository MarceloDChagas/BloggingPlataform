import { Request, Response } from "express";
import { CreatePostUseCase } from "./CreatePostUseCase";

export class CreatePostController{
        constructor(private createPostUseCase: CreatePostUseCase){}
    async handle(req: Request, res: Response): Promise<Response>{
        const {title, content} = req.body;
        try{
            await this.createPostUseCase.executeCreatePost({title, content});
            return res.status(201).send();
        }catch(err:any){
            return res.status(400).json({
                message: err.message || "Unexpected error."
            })
        }
    }
}