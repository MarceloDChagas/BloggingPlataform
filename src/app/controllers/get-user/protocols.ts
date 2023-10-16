import User from "../../entities/User";
import { IControllerResponse } from "../ControllerResponse";
export interface IGetUserController {
  handle(): Promise<IControllerResponse<User[]>>
}

export interface IGetUserRepository {
  getUser(): Promise<User[]>;
}
