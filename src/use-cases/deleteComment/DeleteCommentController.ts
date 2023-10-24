import { DeleteCommentUseCase } from "./DeleteCommentUseCase";
import { Request, Response } from "express";

export class DeletCommentController {
    constructor(private deleteCommentUseCase: DeleteCommentUseCase) {}
    async handleDeleteCommentById(request: Request, response: Response) {
        const { id } = request.params;
        await this.deleteCommentUseCase.executeDeleteCommentById(id);
        return response.status(200).send();
    }
}