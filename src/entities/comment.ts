import { ICommentDTO } from "./ICommentDTO";

export class Comment {
  id?: string;
  content: string;

  constructor(data: ICommentDTO) {
    this.id = data.id;
    this.content = data.content;
  }
}
