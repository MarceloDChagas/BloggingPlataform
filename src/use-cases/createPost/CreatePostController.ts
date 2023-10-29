import { Request, Response } from "express";
import { CreatePostUseCase } from "./CreatePostUseCase";
import { PostValidator } from "../../validators/PostValidator";

export class CreatePostController{
	constructor(private createPostUseCase: CreatePostUseCase){}
    
	async handleCreatePost(req: Request, res: Response): Promise<Response>{
		try {
			const {title, content} = req.body;
			PostValidator.isNotValid({title, content});
			await this.createPostUseCase.executeCreatePost({title, content});
			return res.status(201).send({message: "Post criado com sucesso!"});
		} catch (error) {
			return res.status(400).send({message: "Erro ao criar post."});
		}
	}
}