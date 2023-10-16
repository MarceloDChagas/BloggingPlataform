import { IGetUserController, IGetUserRepository } from "./protocols";

export class GetUserControllers implements IGetUserController {
  constructor(private readonly GetUserRepository: IGetUserRepository) {}

  async handle() {
    try {
      const users = await this.GetUserRepository.getUser();
      return {
        statusCode: 200,
        body: users,
      };
    } catch (err) {
      return {
        statusCode: 500,
        body: "Error getting"
      };
    }
  }
}
