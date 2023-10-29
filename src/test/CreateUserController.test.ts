import request from "supertest";
import app from "../app/app";
import { describe,it,expect, afterEach, jest } from "@jest/globals";
import {user} from "./userModel";

describe("CreateUserController", () => {

	afterEach(async () => {
		jest.resetModules();
		await request(app).del(`/users/${user.email}`);
	});

	it("should return 201 when user is created", async () => {
		const response = await request(app).post("/users").send(user);
		expect(response.status).toBe(201);
	});
	
	it("should return invalid name when user is not created", async () => {
		const userWhitoutName = {
			email: "canso@gmail.com",
			password: "123456dS@",
			username: "johndoess",
			age: 20
		};
		const response = await request(app).post("/users").send(userWhitoutName);
		expect(response.error).toBeTruthy();
		expect(response.status).toBe(400);
	});

	it("should return invalid email when user is not created", async () => {
		const userWithInvalidEmail = {
			name: "John Doe",
			email: "cansogmail.com",
			password: "123456dS@",
			username: "johndoess",
			age: 20
		};
		const response = await request(app).post("/users").send(userWithInvalidEmail);
		expect(response.error).toBeTruthy();    
		expect(response.status).toBe(400);  

	});  

	it("should return invalid password when user is not created", async () => {
		const userWithInvalidPassword = {
			name: "John Doe",
			email: "canso@gmail.com",
			password: "123456",
			username: "johndoess",
			age: 20
		};
		const response = await request(app).post("/users").send(userWithInvalidPassword);
		expect(response.error).toBeTruthy();
		expect(response.status).toBe(400);  
	}
	);
}

);
