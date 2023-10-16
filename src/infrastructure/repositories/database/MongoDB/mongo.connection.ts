import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const username = process.env.MONGODB_USERNAME;
const password = process.env.MONGODB_PASSWORD;
const cluster = process.env.MONGODB_CLUSTER;

const url = `mongodb+srv://${username}:${password}@${cluster}.sviste8.mongodb.net/`;

export async function connectionToMongo(): Promise<string> {
  try {
    await mongoose.connect(url);
    console.log("Conectado ao MongoDB Atlas");
    return "Conectado ao MongoDB Atlas";
  } catch (err) {
    console.error("Houve um erro na conexão com o MongoDB Atlas:", err);
    throw new Error("Erro na conexão com o MongoDB Atlas");
  }
}
