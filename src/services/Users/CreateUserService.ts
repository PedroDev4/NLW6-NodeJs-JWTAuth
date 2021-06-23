import { User } from "../../entities/User";
import { UsersRepository } from "../../repositories/implementations/UsersRepository";
import { AppError } from "../../shared/Errors/AppError";

interface IRequest {
    name: string;
    email: string;
    isAdmin?: boolean
}

class CreateUserService {

    async execute({ name, email, isAdmin }: IRequest): Promise<User> {
        const usersRepository = new UsersRepository();

        if (!email) {
            throw new AppError("Provided email incorrect!");
        }

        const userExists = await usersRepository.findByEmail(email);

        if (userExists) {
            throw new AppError("User already exists!");
        }

        const user = await usersRepository.create(
            name,
            email,
            isAdmin
        );

        return user;
    }

}

export { CreateUserService };