import { FindUserUseCase } from "./FindUserUseCase";
import { Request, Response } from "express";

export class FindUserController {
  constructor(private findUserCase: FindUserUseCase) {}

  async handleFindAllUsers(
    request: Request,
    response: Response
  ): Promise<Response> {
    try {
      const users = await this.findUserCase.executeFindAllUsers();

      return response.status(201).json(users);
    } catch (error) {
      return response.status(400).json({
        message: "Unexpected error.",
      });
    }
  }
}
