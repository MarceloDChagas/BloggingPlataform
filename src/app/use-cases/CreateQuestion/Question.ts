import { IQuestionDTO } from "./IQuestionDTO";

export class Question {
  body: string;
  schoolSubject: string;
  level: string;
  title: string;

  constructor(data: IQuestionDTO) {
    this.body = data.body;
    this.schoolSubject = data.schoolSubject;
    this.level = data.level;
    this.title = data.title;
  }
}
