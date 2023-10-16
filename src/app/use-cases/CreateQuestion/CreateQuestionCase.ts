import { IQuestionRepository } from "../../repositories/IQuestionRepository";
import { IQuestionDTO } from "./IQuestionDTO";
import { Question } from "./Question";

export class CreateQuestionCase {
  constructor(private IQuestionRepository: IQuestionRepository) {}

  async executeSaveQuestion(data: IQuestionDTO) {
    const question = new Question(data);
    await this.IQuestionRepository.saveQuestion(question);
  }
}
export default CreateQuestionCase;
