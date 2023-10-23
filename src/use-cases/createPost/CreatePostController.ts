import { Request, Response } from "express";
import { CreatePostUseCase } from "./CreatePostUseCase";
import { PostValidator } from "../../validators/PostValidator";

export class CreatePostController{
    constructor(private createPostUseCase: CreatePostUseCase){}
    
    async handleCreatePost(req: Request, res: Response): Promise<Response>{
        const {title, content} = req.body;
        PostValidator.isNotValid({title, content});
        await this.createPostUseCase.executeCreatePost({title, content});
        return res.status(201).send({message: "Post criado com sucesso!"});
    }
}