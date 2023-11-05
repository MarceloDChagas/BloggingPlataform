import { jest, describe, it, expect } from "@jest/globals";
import { DeleteUserUseCase } from "../use-cases/deleteUser/DeleteUserUseCase";
import { UserRepository } from "../use-cases/GlobalConfig";

jest.mock("../use-cases/GlobalConfig");

describe("DeleteUserUseCase", () => {
	it("should return an error because user don't exist", async () => {
		const deleteUserUseCase = new DeleteUserUseCase(UserRepository);
		jest.spyOn(UserRepository, "findByEmail").mockResolvedValue(undefined);
		try {
			await deleteUserUseCase.executeDeleteUserByEmail("invalidEmail@gmail.com");
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		} catch(error: any) {
			expect(error).toEqual(new Error("User not found"));
		}
	});
	it("should return an succes because user exist and was deleted", async () => {
		jest.spyOn(UserRepository, "findByEmail").mockResolvedValue({name: "canso", email: "canso@gmail.com", password: "123456", username: "canso", age: 20});
		const result = await UserRepository.findByEmail("canso@gmail.com");
		expect(result).toEqual({name: "canso", email: "canso@gmail.com", password: "123456", username: "canso", age: 20});
	});
});
