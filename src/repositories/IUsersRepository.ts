import { User } from "../entities/User";

interface IUsersRepository {

    create(name: string, email: string, password: string, isAdmin?: boolean): Promise<User>;
    findByEmail(email: string): Promise<User>;
    findById(id: string): Promise<User>;
    updateUser(id: string, name: string, email: string, isAdmin: boolean): Promise<User>;
    findAll(): Promise<User[]>;

}

export { IUsersRepository };