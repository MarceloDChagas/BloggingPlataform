import { IPostDTO } from "./IPostDTO";

export class Post{
    title: string;
    content: string;

    constructor(data: IPostDTO){
        this.title = data.title;
        this.content = data.content;
    }   
}
