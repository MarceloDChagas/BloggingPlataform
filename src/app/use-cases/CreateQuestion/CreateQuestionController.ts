import { CreateQuestionCase } from "./CreateQuestionCase";
import { Request, Response } from "express";

export class CreateQuestionController {
  constructor(private CreateQuestionCase: CreateQuestionCase) {}

  async handleSaveQuestion(req: Request, res: Response): Promise<Response> {
    try {
      const { body, schoolSubject, level, title } = req.body;
      await this.CreateQuestionCase.executeSaveQuestion({
        body,
        schoolSubject,
        level,
        title,
      });
      return res.status(201).json({ message: "Question Saved with Sucess" });
    } catch (err) {
      return res.status(400).json({ message: "Unexpected error." });
    }
  }
}
