import { UserCreatePostController } from "./UserCreatePostController";
import { UserCreatePostUseCase } from "./UserCreatePostUseCase";
import { IUserRepository } from "../../infrastructure/repositories/IUserRepository";
import { Request, Response } from "express";

describe("UserCreatePostController", () => {
  let controller: UserCreatePostController;
  let useCase: UserCreatePostUseCase;
  let repository: IUserRepository;
  let request: Request;
  let response: Response;

  beforeEach(() => {
    useCase = {
      executeCreatePost: jest.fn(),
    } as unknown as UserCreatePostUseCase;

    repository = {
      findByEmail: jest.fn(),
      addPost: jest.fn(),
    } as unknown as IUserRepository;

    controller = new UserCreatePostController(useCase, repository);

    request = {
      params: {
        email: "test@example.com",
      },
      body: {
        title: "Test Post",
        content: "This is a test post",
      },
    } as unknown as Request;

    response = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    } as unknown as Response;
  });

  describe("handle", () => {
    it("should return 404 if user is not found", async () => {
      (repository.findByEmail as jest.Mock).mockReturnValueOnce(undefined);

      await controller.handle(request, response);

      expect(response.status).toHaveBeenCalledWith(404);
      expect(response.json).toHaveBeenCalledWith({ message: "User not found" });
    });

    it("should return 400 if post is not created", async () => {
      (repository.findByEmail as jest.Mock).mockReturnValueOnce({});
      (useCase.executeCreatePost as jest.Mock).mockReturnValueOnce(undefined);

      await controller.handle(request, response);

      expect(response.status).toHaveBeenCalledWith(400);
      expect(response.json).toHaveBeenCalledWith({ message: "Post not created" });
    });

    it("should add post to user and return 200", async () => {
      const post = { id: 1, title: "Test Post", content: "This is a test post" };
      (repository.findByEmail as jest.Mock).mockReturnValueOnce({});
      (useCase.executeCreatePost as jest.Mock).mockReturnValueOnce(post);

      await controller.handle(request, response);

      expect(response.status).toHaveBeenCalledWith(200);
      expect(repository.addPost).toHaveBeenCalledWith(request.params.email, post);
    });
  });
});