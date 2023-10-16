import { IQuestionRepository } from "../../repositories/IQuestionRepository";

export class FindQuestionCase {
  constructor(private questionRepository: IQuestionRepository) {}
  async executeFindQuestionByLevel(level: string) {
    const question = await this.questionRepository.findByLevel(level);

    if (!question) {
      throw new Error("Question not found");
    }

    return question;
  }
  async executeFindQuestion() {
    try {
      const question = await this.questionRepository.findAllQuestion();
      return question;
    } catch (err) {
      throw new Error("Question not found");
    }
  }
  async executeFindRandomQuestion() {
    try {
      const questions = await this.questionRepository.findAllQuestion();
  
      if (questions && questions.length > 0) {
        const randomIndex = Math.floor(Math.random() * questions.length);
  
        return questions[randomIndex];
      } else {
        throw new Error("No questions found");
      }
    } catch (err) {
      throw new Error("Question not found");
    }
  }
  
}
export default FindQuestionCase;
