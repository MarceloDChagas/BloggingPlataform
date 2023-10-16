import { ObjectId } from "mongodb";
import { ICreateUserDTO } from "./CreateUserDTO";

export class User {
  readonly _id: ObjectId | undefined; // Use o tipo ObjectId

  name: string;
  college: string;
  email: string;

  constructor(data: Omit<ICreateUserDTO, "_id">, id?: string) {
    this.name = data.name;
    this.college = data.college;
    this.email = data.email;
    if (id) {
      this._id = new ObjectId(id);
    }
  }
}
