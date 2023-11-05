import { jest, describe, it, expect } from "@jest/globals";
import { GetUserUseCase } from "../use-cases/getUser/GetUserUseCase";
import { UserRepository } from "../use-cases/GlobalConfig";

jest.mock("../use-cases/GlobalConfig");

describe("GetUserUseCase", () => {  
	it("should return an empty array because don't have any users", async () => {
		const getUserUseCase = new GetUserUseCase(UserRepository);
		const users = await getUserUseCase.executeGetAllUser();
		expect(users).toEqual([]);
	});

	it("should return an empty array because don't have any users", async () => {
		const getUserUseCase = new GetUserUseCase(UserRepository);
		const user = await getUserUseCase.executeGetUserByEmail("canso@gmail.com");
		expect(user).toEqual([]);
	});

	it("should return an array with one user", async () => {
		UserRepository.create({
			name: "Canso",
			email: "canso@gmail.com",
			password: "123456",
			age: 20,
			username: "canso"
		});

		jest.spyOn(UserRepository, "getAll").mockResolvedValue([{
			name: "Canso",
			email: "canso@gmail.com",
			password: "123456",
			age: 20,
			username: "canso"
		}]);

		const result = await UserRepository.getAll();

		expect(result).toEqual([{
			name: "Canso",
			email: "canso@gmail.com",
			password: "123456",
			age: 20,
			username: "canso"
		}]);
	}
	);

	it("should return an array with one user find by Email", async () => {
		UserRepository.create({
			name: "Canso",
			email: "canso@gmail.com",
			password: "123456",
			age: 20,
			username: "canso"
		});
		jest.spyOn(UserRepository, "findByEmail").mockResolvedValue({name: "Canso",
			email: "canso@gmail.com",
			password: "123456",
			age: 20,
			username: "canso"
		});
		const result = await UserRepository.findByEmail("canso@gmail.com");
		expect(result).toEqual({name: "Canso",
			email: "canso@gmail.com",
			password: "123456",
			age: 20,
			username: "canso"});
	}
	);
});