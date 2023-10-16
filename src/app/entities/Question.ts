import { IQuestionDTO } from "./IQuestionDTO"

class Question{
    body: string
    schoolSubject: string
    level: string

    constructor(data: IQuestionDTO){
        
        this.body = data.body
        this.schoolSubject = data.schoolSubject
        this.level = data.level

    }
}