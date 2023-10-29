import request from "supertest";
import app from "../app/app";
import { describe,it,expect, beforeEach, afterEach, jest } from "@jest/globals";
import { user } from "./userModel";	

describe("UpdateUserController", () => {

	beforeEach(async () => {
		jest.resetModules();
		await request(app).post("/users").send(user);
	});

	afterEach(async () => {
		await request(app).delete(`/users/${user.email}`);
	});

	it("should return 201 when user is updated", async () => {
		const response = await request(app).put(`/users/${user.email}`).send({
			name: "John Does",
			password: "123456dS@Updated",
			username: "johndoessUpdated"
		});

		expect(response.status).toBe(201);
                
	});
    
});
