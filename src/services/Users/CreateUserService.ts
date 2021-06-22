import { User } from "../../entities/User";
import { UsersRepository } from "../../repositories/implementations/UsersRepository";

interface IRequest {
    name: string;
    email: string;
    isAdmin?: boolean
}

class CreateUserService {

    async execute({ name, email, isAdmin }: IRequest): Promise<User> {
        const usersRepository = new UsersRepository();

        if (!email) {
            throw new Error("Provided email incorrect!");
        }

        const userExists = await usersRepository.findByEmail(email);

        if (userExists) {
            throw new Error("User already exists!");
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