import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const username = process.env.MONGODB_USERNAME;
const password = process.env.MONGODB_PASSWORD;
const cluster = process.env.MONGODB_CLUSTER;

export const url = `mongodb+srv://${username}:${password}@${cluster}.sviste8.mongodb.net/`;

export const connectionToMongo = async (url: string) => {
	try {
		await mongoose.connect(url);
	} catch (err) {
		throw new Error("Erro na conexão com o MongoDB Atlas");
	}
};

export const disconnectFromMongo = async () => {
	if (mongoose.connection.readyState !== 0){
		await mongoose.disconnect();
	}
};
