import { DeletePostUseCase } from "./DeletePostUseCase";
import {Request, Response} from "express"

export class DeletePostController {
    constructor(private deletePostUseCase: DeletePostUseCase) {
    }
    async handleDeletePostById(request: Request, response: Response) {
        const { id } = request.params;
        await this.deletePostUseCase.executeDeletePost(id);
        return response.status(200).send();
    }
}