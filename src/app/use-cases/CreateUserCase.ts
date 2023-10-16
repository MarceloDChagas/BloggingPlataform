import { client, dbName} from "../../config/database";
import User from "../entities/User";
async function createUserCase() {
  try {
    const db = client.db(dbName);
    const usersCollection = db.collection<User>("users");

    const newUser = new User({
      name: "Marcelo",
      email: "marcelo.lucas02@gmail.com",
      college: "IFPE",
    });

    const result = await usersCollection.insertOne(newUser);
    console.log("User inserted successfully");
  } catch (error) {
    console.log(error);
  } finally {
    await client.close();
  }
}
