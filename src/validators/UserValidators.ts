import { User } from "../entities/user";
import { hash } from "bcryptjs";
export class UserValidators {
	static isNotValid(user: User) {
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

		if (user.email === undefined || user.email === null || !emailRegex.test(user.email)) {
			throw new Error("Email inválido");
		}
		if (user.name === undefined || user.name === null || user.name.trim() === "") {
			throw new Error("Nome inválido");
		}
		if (user.password === undefined || user.password === null || !passwordRegex.test(user.password)) {
			throw new Error("Senha inválida. A senha deve conter pelo menos 8 caracteres, uma letra maiúscula, uma letra minúscula, um número e um caractere especial.");
		}
		
		return false;
	}
	static async hashPassword(password: string) {
		return await hash(password, 8);
	}
}