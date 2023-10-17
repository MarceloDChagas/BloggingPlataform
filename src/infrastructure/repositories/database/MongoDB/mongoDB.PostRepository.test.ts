import { describe, expect, beforeEach, it } from '@jest/globals';
import {MongoDBPostRepository} from "./mongoDB.PostRepository";
import {Post} from "../../../../entities/post"
import { Comment } from "../../../../entities/comment";

describe("MongoDBPostRepository methods tests", () => {
    let repository : MongoDBPostRepository;
    const post = new Post({title: "title", content: "text"});
    post.id = "123456789";
    beforeEach(() => {
        repository = new MongoDBPostRepository();
    });
    describe("create post", () => {
        it("should create a post", async () => {
            const post: Post = {
                title: "title",
                content: "text",
            };
            const postId: Post | undefined = await repository.createPost(post);
            expect(postId).toBeDefined();
        });
        it("should return a error for invalid properties", async () => {
            expect(async () => {
                await repository.createPost(post);
            }).rejects.toThrowError("Erro ao criar o post");
            }
        );
    });
    describe("delete post", () => {
        it("should delete a post", async () => {
            const postObject = await repository.deletePost(post.id!);
            expect(postObject).toBeUndefined();
        });  
        it("should return a error of invalid id", async () => {
            expect(async () => {
                await repository.deletePost("12345678");
            }).rejects.toThrowError("Erro ao deletar o post");
        });
    });
    describe("update post", () => {
        it("should update a post", async () => {
            const updatedPost = new Post({title: "titleUpdated", content: "textUpdated"});
            expect(repository.updatePost(post.id!, updatedPost)).toEqual("titleUpdated");
        });
    });
    describe("get all posts", () => {
        it("should return all posts", async () => {
            const posts = await repository.getAllPosts();
            expect(posts).toEqual([]);
        });
    });
    describe("get post by id", () => {
        it("should return a post", async () => {
            const postObject = await repository.getById(post.id!);
            expect(postObject).toBeDefined();
        });
        it("should return a error of invalid id", async () => {
            expect(async () => {
                await repository.getById("12345678");
            }).rejects.toThrowError("Post não encontrado");
        });
    });
    describe("add comment to post", () => {
        it("should add a comment to post", async () => {
            const comment = new Comment({content: "text"});
            const commentId = await repository.addComment(post.id!, comment);
            expect(commentId).toBeDefined();
        });
        it("should return a error of invalid id", async () => {
            const comment = new Comment({content: "text"});
            expect(async () => {
                await repository.addComment("12345678", comment);
            }).rejects.toThrowError("Post não encontrado");
        });
    });
});
