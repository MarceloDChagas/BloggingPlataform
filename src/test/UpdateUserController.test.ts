import request from "supertest";
import app from "../app/app";
import { describe,it,expect, beforeEach, afterEach } from "@jest/globals";

describe("UpdateUserController", () => {
    const user = {
		name: "John Doe",
		email: "canso@gmail.com",
		password: "123456dS@",
		username: "johndoess",
		age: 20
	};

    beforeEach(async () => {
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
        expect(response.body.name).toBe("John Does");
        expect(response.body.username).toBe("johndoessUpdated");
        
    });
    
    });
