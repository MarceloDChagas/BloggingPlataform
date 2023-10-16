import { Request, Response } from "express";
import { CreateUserUseCase } from "./CreateUserCase";

export class CreateUserController {
  constructor(private createUserUseCase: CreateUserUseCase) {}

  async handleCreateUser(
    request: Request,
    response: Response
  ): Promise<Response> {
    const { name, college, email } = request.body;
    try {
      await this.createUserUseCase.executeCreateUser({ name, college, email });
      return response.status(201).json({ message: "success" });
    } catch (err) {
      return response.status(400).json({ message: "Unexpected error." });
    }
  }
}
