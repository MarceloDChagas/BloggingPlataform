import { IUserRepository } from "../../IUserRepository";
import { User } from "../../../use-cases/CreateUser/User";
import UserSchema from "./UserSchema";

export class MongoDBUserRepository implements IUserRepository {
  async findAllUsers(): Promise<User[] | null> {
    try {
     const users = await UserSchema.find();
      return users;
    } catch (error) {
      console.error("Error on finding users:", error);
      throw error;
    }
  }
  async findByEmail(email: string): Promise<User | null> {
    try {
      const userDocument = await UserSchema.findOne({ email });
      if (userDocument) {
        const user: User = {
          _id: userDocument._id,
          name: userDocument.name as string,
          college: userDocument.college as string,
          email: userDocument.email as string,
        };
        console.error("Email already exists");
        return user;
      } else {
        console.log("Email not found");
        return null;
      }
    } catch (error) {
      console.error("Error on finding by email:", error);
      throw error;
    }
  }
  async saveUser(user: User): Promise<void> {
    try {
      const newUser = await UserSchema.create(user);
      console.log("User saved:", newUser);
    } catch (error) {
      console.error("Error saving user:", error);
      throw error;
    }
  }
}
