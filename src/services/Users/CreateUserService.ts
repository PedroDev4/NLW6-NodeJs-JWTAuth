import { User } from "../../entities/User";
import { UsersRepository } from "../../repositories/implementations/UsersRepository";
import { AppError } from "../../shared/Errors/AppError";
import { hash } from "bcryptjs";

interface IRequest {
    name: string;
    email: string;
    isAdmin?: boolean;
    password: string
}

interface IResponse {
    name: string;
    email: string;
    isAdmin: boolean;
}

class CreateUserService {

    async execute({ name, email, isAdmin, password }: IRequest): Promise<IResponse> {
        const usersRepository = new UsersRepository();

        if (!email) {
            throw new AppError("Provided email incorrect!");
        }

        const userExists = await usersRepository.findByEmail(email);

        if (userExists) {
            throw new AppError("User already exists!");
        }

        const passwordHash = await hash(password, 12);

        const user = await usersRepository.create(
            name,
            email,
            passwordHash,
            isAdmin
        );

        const userReturned: IResponse = {
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
        }

        return userReturned;
    }

}

export { CreateUserService };