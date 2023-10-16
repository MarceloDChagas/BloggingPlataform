import { SendQuestionCase } from "./SendQuestionCase";
import { Request, Response } from "express";

export class SendQuestionController {
  constructor(private sendQuestionCase: SendQuestionCase) {}

  async handleSendQuestion(req: Request, res: Response): Promise<Response> {
    try {
      await this.sendQuestionCase.executeSendQuestion();
      return res.status(201).json({ message: "success" });
    } catch (err) {
      return res.status(400).json({ message: "Unexpected error." });
    }
  }
}
