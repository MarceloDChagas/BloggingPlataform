import { IUserDTO } from "./IUserDTO";
import { v4 as uuidv4 } from "uuid";

class User {
  readonly id: string = "";
  name: string;
  college: string;
  email: string;

  constructor(data: Omit<IUserDTO, "id">, id?: string) {
    this.name = data.name;
    this.college = data.college;
    this.email = data.email;
    if (!id) {
      this.id = uuidv4();
    } else {
      this.id = id;
    }
  }
}
export default User;
