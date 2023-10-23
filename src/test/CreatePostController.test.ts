import { describe, it,expect, afterEach } from "@jest/globals";
import {post} from "./postModel";
import app from "../app/app";
import request from "supertest";

describe("CreatePostController", () => {
    
    afterEach(async () => {
        await request(app).delete(`/posts/${post.title}`);
    });

    it("should return 201 when post is created", async () => {
        const response = await request(app).post("/posts").send(post);
        expect(response.body.title).toBe(post.title);
        expect(response.body.content).toBe(post.content);
        expect(response.status).toBe(201);
    }

    );
    it("should return invalid title when post is not created", async () => {
        const postWhitoutTitle = {content: "post content"};
        const response = await request(app).post("/posts").send(postWhitoutTitle);
        expect(response.error).toBeTruthy();
        expect(response.status).toBe(400);
    });

    it("should return invalid content when post is not created", async () => {
        const postWhitoutContent = {title: "post title"};
        const response = await request(app).post("/posts").send(postWhitoutContent);
        expect(response.error).toBeTruthy();
        expect(response.status).toBe(400);
    });

});
    
