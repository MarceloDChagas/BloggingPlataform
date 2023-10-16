import { Request, Response } from "express";
import { FindQuestionCase } from "./FindQuestionCase";

export class FindQuestionController {
  constructor(private findQuestionCase: FindQuestionCase) {}
  async handleFindQuestion(
    request: Request,
    response: Response
  ): Promise<Response> {
    try {
      const question = await this.findQuestionCase.executeFindQuestion();

      return response.status(201).json(question);
    } catch (error) {
      return response.status(400).json({
        message: "Unexpected error.",
      });
    }
  }
  async handleFindQuestionByLevel(
    request: Request,
    response: Response
  ): Promise<Response> {
    const { level } = request.body;

    try {
      const question =
        await this.findQuestionCase.executeFindQuestionByLevel(level);

      return response.status(201).json(question);
    } catch (error) {
      return response.status(400).json({
        message: "Unexpected error.",
      });
    }
  }
}

export default FindQuestionController;
