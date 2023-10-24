import request from "supertest";
import app from "../app/app";
import { describe,it,expect, beforeAll } from "@jest/globals";
import { comment } from "./commentModel";

describe("GetCommentController", () => {
    
    beforeAll(async () => {
        await request(app).post("/comments").send(comment);
    }
);
    it("should return 200 when comment is found", async () => {
        const response = await request(app).get(`/comments/${comment.id}`);
        expect(response.status).toBe(200);
        expect(response.body.content).toBe(comment.content);
        expect(response.body.id).toBe(comment.id);
    }
);
    
    it("should return 404 when comment is not found", async () => {
        const response = await request(app).get("/comments/invalidId");
            expect(response.status).toBe(404);
        }
    );
    }
);
      
       
