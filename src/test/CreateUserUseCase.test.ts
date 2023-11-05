import { CreateUserUseCase } from "../use-cases/createUser/CreateUserUseCase";
import { UserRepository } from "../use-cases/GlobalConfig";
import { jest, describe, it, expect } from "@jest/globals";
jest.mock("../use-cases/GlobalConfig");

describe("CreateUserUseCase", () => {
	it("should create user", async () => {
		const createUserUseCase = new CreateUserUseCase(UserRepository);

		const user = await createUserUseCase.executeCreateUser({
			name: "John Doe",
			username: "john",
			age: 20,
			email: "canso@gmail.com",
			password: "123456"
		});

		expect(UserRepository.create).toHaveBeenCalledWith(user);
	});
});