import { UsersRepository } from "../../repositories/implementations/UsersRepository";
import { AppError } from "../../shared/Errors/AppError";
import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";

interface IResponse {
    token: string,
    authenticatedUser: {
        name: string;
        email: string
    }
}

class AuthenticateUserService {

    async execute(email: string, password: string): Promise<IResponse> {
        const usersRepository = new UsersRepository();

        if (!email) {
            throw new AppError("Invalid email");
        }

        const user = await usersRepository.findByEmail(email);

        if (!user) {
            throw new AppError("Email or password incorrect.");
        }

        const correctPassword = await compare(password, user.password);

        if (!correctPassword) {
            throw new AppError("Email or password incorrect.");
        }


        // Gerando JWT
        const token = sign({
            email: user.email // Payload
        }, "26e959806e31801936d2bc02e2cd849e", { // Security key
            subject: user.id,
            expiresIn: "1d"
        });

        const returnToken: IResponse = {
            token,
            authenticatedUser: {
                name: user.name,
                email: user.email
            }
        };

        return returnToken
    }

}

export { AuthenticateUserService };