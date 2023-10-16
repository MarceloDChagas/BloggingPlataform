import { Question } from "../use-cases/CreateQuestion/Question";

export interface IQuestionRepository {
  saveQuestion(question: Question): Promise<void>;
  findByLevel(level: string): Promise<Question[] | null>;
  findAllQuestion(): Promise<Question[] | null>;
}
