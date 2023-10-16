import { IPostDTO } from "./IPostDTO";

export class Post {
    title: string;
    content: string;
    comments?: string[];
    id?: string;

    constructor(data: IPostDTO, comments?: string[]) {
        this.title = data.title;
        this.content = data.content;
        if (comments) {
            this.comments = comments;
        }
        this.id = data.id;
    }
}

