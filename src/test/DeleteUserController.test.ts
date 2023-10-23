import request from "supertest";
import app from "../app/app";
import { describe,it,expect } from "@jest/globals";
import {user} from "./userModel";


describe("DeleteUserController", () => {
    
	it("should return 201 when user is deleted", async () => {
		await request(app).post("/users").send(user);
		const response = await request(app).delete(`/users/${user.email}`);
		expect(response.status).toBe(201);
		expect(response.body).toEqual({
			message: "Usuário deletado com sucesso!"
		});
	});
	it("should return 404 when user is not found", async () => {
		const response = await request(app).delete("/users/invalidEmail");
		expect(response.status).toBe(404);
	});
});