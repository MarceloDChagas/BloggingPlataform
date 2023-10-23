import request from "supertest";
import app from "../app/app";
import { describe,it,expect, beforeAll, afterAll } from "@jest/globals";
import {user} from "./userModel";

describe("GetUserController", () => {

	beforeAll(async () => {
		await request(app).post("/users").send(user); 
	});

	afterAll(async () => {
		await request(app).del(`/users/${user.email}`);
	});

	it("should return 200 when user is found", async () => {
		const response = await request(app).get(`/users/${user.email}`);
		expect(response.status).toBe(200);
		expect(response.body.name).toBe(user.name);
		expect(response.body.username).toBe(user.username);
		expect(response.body.age).toBe(user.age);
		expect(response.body.email).toBe(user.email);
	});

	it("should return 404 when user is not found", async () => {
		const response = await request(app).get("/users/invalidEmail");
		expect(response.status).toBe(404);
	});
});
