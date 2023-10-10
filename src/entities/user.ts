export class User{
    name: string;
    username: string;
    age: number;
    email: string;
    password: string;
    constructor(name: string, username: string, age: number, email: string, password: string){
        this.name = name;
        this.username = username;
        this.age = age;
        this.email = email;
        this.password = password;
    }
    
}