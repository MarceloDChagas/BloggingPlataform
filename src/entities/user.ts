import { IUserDTO } from "./IUserDTO";

export class User{
    name: string;
    username: string;
    age: number;
    email: string;
    password: string;
    constructor(data: IUserDTO){
        this.name = data.name;
        this.username = data.username;
        this.age = data.age;
        this.email = data.email;
        this.password = data.password;
    }
    
}