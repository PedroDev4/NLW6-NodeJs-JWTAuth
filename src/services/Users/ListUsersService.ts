import { User } from "../../entities/User";
import { UsersRepository } from "../../repositories/implementations/UsersRepository";
import { classToPlain } from "class-transformer";

class ListUsersService {

    async execute() {
        const usersRepository = new UsersRepository();

        const users = await usersRepository.findAll();

        return classToPlain(users);
    }

}

export { ListUsersService };