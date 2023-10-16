import { connectionToMongo } from "./mongo.connection";

describe("connectionToMongo", () => {
  it("should connect to MongoDB Atlas", async () => {
    const result = await connectionToMongo();
    expect(result).toEqual("Conectado ao MongoDB Atlas");
  });

  it("should throw an error if connection fails", async () => {
    // Change the URL to an invalid one to simulate a failed connection
    const invalidUrl = "mongodb+srv://invalid-url";
    const originalUrl = process.env.MONGODB_URI;
    process.env.MONGODB_URI = invalidUrl;

    await expect(connectionToMongo()).rejects.toThrow("Erro na conexão com o MongoDB Atlas");

    // Restore the original URL
    process.env.MONGODB_URI = originalUrl;
  });
});