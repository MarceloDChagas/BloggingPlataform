import { LikePostUseCase } from "./LikePostUseCase";
import { Request, Response } from "express";

export class LikePostController {
    constructor(private likePostUseCase: LikePostUseCase) {}

    async handleLikePost(req: Request, res: Response) {
        const { postId } = req.params;
        const { userEmail } = req.body;
        const [post, user] = await this.likePostUseCase.executeLikePost(postId, userEmail);
        return res.status(200).send({ post, user });
    }
}