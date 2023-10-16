import { Question } from "../../../../use-cases/CreateQuestion/Question";
import { IQuestionRepository } from "../../../IQuestionRepository";
import QuestionSchema from "./QuestionSchema";

export class MongoDBQuestionRepository implements IQuestionRepository {
  
  async saveQuestion(question: Question): Promise<void> {
    try {
      const newQuestion = new QuestionSchema(question);
      await newQuestion.save();
      console.log("Question saved");
    } catch (err) {
      console.error("Error saving question:", err);
      throw err;
    }
  }
  async findByLevel(level: string): Promise<Question[] | null> {
    const questions = await QuestionSchema.find({ level });
    if (questions) {
      return questions;
    } else {
      return null;
    }
  }

  async findAllQuestion(): Promise<Question[] | null> {
    const questions = await QuestionSchema.find();
    console.log(questions);
    if (questions) {
      return questions;
    } else {
      return null;
    }
  }
}
