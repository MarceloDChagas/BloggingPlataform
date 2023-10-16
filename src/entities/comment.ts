import { ICommentDTO } from "./ICommentDTO";

export class Comment {
  content: string;

  constructor(data: ICommentDTO) {
    this.content = data.content;
  }
}
