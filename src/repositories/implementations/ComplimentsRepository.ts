import { getRepository, Repository } from "typeorm";
import { ICreateComplimentsDTO } from "../../DTOs/ICreateComplimentsDTO";
import { Compliment } from "../../entities/Compliment";
import { IComplimentsRepository } from "../IComplimentsRepository";


class ComplimentRepository implements IComplimentsRepository {

    private repository: Repository<Compliment>

    constructor() {
        this.repository = getRepository(Compliment);
    }

    async create({ tag_id, user_sender, user_receiver, message }: ICreateComplimentsDTO): Promise<Compliment> {
        const compliment = this.repository.create({
            tag_id,
            user_sender,
            user_receiver,
            message
        });

        await this.repository.save(compliment);

        return compliment;
    }

    async findById(id: string): Promise<Compliment> {
        const compliment = await this.repository.findOne({ id });
        return compliment;
    }

    async findByUserID(user_id: string): Promise<Compliment> {
        const compliment = await this.repository.findOne({
            where: { user_sender: user_id }
        });

        return compliment;
    }

    async findManyByUserReceiver(id: string): Promise<Compliment[]> {
        const compliments = await this.repository.find({
            where: { user_receiver: id },
            relations: ["tag"]
        });

        return compliments;
    }

    async findManyByUserSender(id: string): Promise<Compliment[]> {
        const compliments = await this.repository.find({
            where: { user_sender: id },
            relations: ["tag"]
        });

        return compliments;
    }

    async update({ id, tag_id, user_sender, message }: ICreateComplimentsDTO): Promise<Compliment> {
        const compliment = await this.repository.findOne({
            id
        });

        compliment.tag_id = tag_id;
        compliment.user_sender = user_sender;
        compliment.message = message;

        await this.repository.save(compliment);

        return compliment;
    }
    async delete(id: string): Promise<void> {
        const compliment = await this.repository.findOne({ id });
        await this.repository.remove(compliment);
    }

}

export { ComplimentRepository };