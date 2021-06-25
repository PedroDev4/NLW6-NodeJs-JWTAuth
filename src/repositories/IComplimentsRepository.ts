import { ICreateComplimentsDTO } from "../DTOs/ICreateComplimentsDTO";
import { Compliment } from "../entities/Compliment";

interface IComplimentsRepository {

    create({ tag_id, user_receiver, user_sender, message }: ICreateComplimentsDTO): Promise<Compliment>;
    findById(id: string): Promise<Compliment>;
    findByUserID(user_id: string): Promise<Compliment>
    update({ id, tag_id, user_receiver, user_sender, message }: ICreateComplimentsDTO): Promise<Compliment>
    delete(id: string): Promise<void>;
    findManyByUserReceiver(id: string): Promise<Compliment[]>
    findManyByUserSender(id: string): Promise<Compliment[]>

}

export { IComplimentsRepository };