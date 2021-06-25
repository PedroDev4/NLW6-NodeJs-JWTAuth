import { getRepository, Repository } from "typeorm";
import { User } from "../../entities/User";
import { IUsersRepository } from "../IUsersRepository";


class UsersRepository implements IUsersRepository {

    private repository: Repository<User>;

    constructor() {
        this.repository = getRepository(User);
    }


    async create(name: string, email: string, password: string, isAdmin?: boolean): Promise<User> {
        const user = this.repository.create({
            name,
            email,
            password,
            isAdmin
        });

        await this.repository.save(user);

        return user;
    }

    async findByEmail(email: string): Promise<User> {
        const user = await this.repository.findOne({ email })
        return user;
    }

    async findById(id: string): Promise<User> {
        const user = await this.repository.findOne({ id });
        return user;
    }

    async findAll(): Promise<User[]> {
        const users = await this.repository.find();
        return users;
    }

    async updateUser(id: string, name?: string, email?: string, isAdmin?: boolean): Promise<User> {
        await this.repository.update(id, {
            name,
            email,
            isAdmin
        });

        const updatedUser = await this.repository.findOne({ id });
        return updatedUser;
    }

}

export { UsersRepository };