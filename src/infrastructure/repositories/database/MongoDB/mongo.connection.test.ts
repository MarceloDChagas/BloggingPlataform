import { beforeEach, describe, it, expect, jest, afterAll } from "@jest/globals";
import { connectionToMongo, url, disconnectFromMongo } from "./mongo.connection";

describe("MongoDB connection", () => {
	beforeEach(async() => {
		jest.resetModules();
		jest.resetAllMocks();
	});
	afterAll(async () => {
		disconnectFromMongo();
	});


	it("should connect to MongoDB", async () => {
		const connection = await connectionToMongo(url);
		expect(connection).toBeUndefined();
	});

	it("should throw an error if it can't connect to MongoDB", async () => {
		const invalidUrl = "mongodb+srv://invalidUsername:invalidPassword@$invalidCluster.sviste8.mongodb.net/";
		expect(connectionToMongo(invalidUrl)).rejects.toThrowError("Erro na conexão com o MongoDB Atlas");
	});
});
