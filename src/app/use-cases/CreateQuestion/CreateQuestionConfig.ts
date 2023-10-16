import { MongoDBQuestionRepository } from "../../repositories/database/MongoDB/Question/question.database.mongo";
import CreateQuestionCase from "./CreateQuestionCase";
import { CreateQuestionController } from "./CreateQuestionController";

const MongoDBMailRepository = new MongoDBQuestionRepository();

const createQuestionCase = new CreateQuestionCase(MongoDBMailRepository);

const createQuestionController = new CreateQuestionController(
  createQuestionCase
);

export default createQuestionController;
