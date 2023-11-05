import { LikePostUseCase } from "./LikePostUseCase";
import { Request, Response } from "express";

export class LikePostController {
	constructor(private likePostUseCase: LikePostUseCase) {}

	async handleLikePost(req: Request, res: Response) {
		try {
			const { postId } = req.params;
			const { userEmail } = req.body;
			const [post, user] = await this.likePostUseCase.executeLikePost(postId, userEmail);
			return res.status(200).send({ post, user });
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		} catch (error: any) {
			return res.status(400).send({ error: error.message });
		}
	}

	async handleDeslikePost(req: Request, res: Response) {
		try {
			const { postId } = req.params;
			const { userEmail } = req.body;
			const [post, user] = await this.likePostUseCase.executeDeslikePost(postId, userEmail);
			return res.status(200).send({ post, user });
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		} catch (error: any) {
			return res.status(400).send({ error: error.message });
		}
	}
}