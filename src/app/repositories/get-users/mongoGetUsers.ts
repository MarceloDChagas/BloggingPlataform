import { IGetUserRepository } from "../../controllers/get-user/protocols";
import User from "../../entities/User";

export class MongoGetUserRepository implements IGetUserRepository {
  async getUser(): Promise<User[]> {
    const users = [
      {
        id: "60000000-0000-0000-0000-000000000000",
        name: "Cnao",
        email: "Canso@gmail.com",
        college: "canso mariano besta fera",
      },
    ];

    // Aguardar um curto período para simular uma operação assíncrona, como buscar dados de um banco de dados
    await new Promise((resolve) => setTimeout(resolve, 1000));

    return Promise.resolve(users);
  }
}
