import { MongoDBQuestionRepository } from "../../repositories/database/MongoDB/Question/question.database.mongo";
import { FindQuestionCase } from "./FindQuestionCase";
import FindQuestionController from "./FindQuestionController";

const mongoDBQuestionRepository = new MongoDBQuestionRepository();
export const findQuestionCase = new FindQuestionCase(mongoDBQuestionRepository);
export const findQuestionController = new FindQuestionController(
  findQuestionCase
);

export default { findQuestionCase, findQuestionController };
