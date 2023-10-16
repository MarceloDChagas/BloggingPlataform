import {MongoDBCommentRepository} from './mongoDB.CommentRepository';
import {Comment} from "../../../../entities/comment"

describe("MongoDBCommentRepository methods tests", () => {
    let repository: MongoDBCommentRepository;
    const commentObject = new Comment({content: "text"});

    beforeEach(() => {
        repository = new MongoDBCommentRepository();
    });
    
    describe("create comment", () => {
        it("should create a comment", async () => {
            const comment = await repository.create({
                content: "text"
            });
            expect(comment.content).toEqual("text");
        });
    });
    describe("delete comment", () => {
        it("should delete a comment", async () => {
            commentObject.id = "123456789";
            const comment = await repository.delete(commentObject.id!);
            expect(comment).toBeUndefined();
        });
        it("should return a error of invalid id", async () => {
            commentObject.id = "123456789";
            expect(async () => {
                await repository.delete(commentObject.id!);
            }).rejects.toThrowError("Erro ao deletar o comentário");
        });
    });
    describe("get all comments", () => {
        it("should return all comments", async () => {
            const comments = await repository.getAll();
            expect(comments).toEqual([]);
        });
    });
});
