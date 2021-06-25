import { ICreateComplimentsDTO } from "../../DTOs/ICreateComplimentsDTO";
import { Compliment } from "../../entities/Compliment";
import { ComplimentRepository } from "../../repositories/implementations/ComplimentsRepository";
import { TagsRepository } from "../../repositories/implementations/TagsRepository";
import { UsersRepository } from "../../repositories/implementations/UsersRepository";
import { AppError } from "../../shared/Errors/AppError";


class CreateComplimentsService {

    async execute({ tag_id, user_sender, user_receiver, message }: ICreateComplimentsDTO): Promise<Compliment> {
        const complimentsRepository = new ComplimentRepository();
        const usersRepository = new UsersRepository();
        const tagsRepository = new TagsRepository();

        const userReceiverExists = await usersRepository.findById(user_receiver);

        if (!userReceiverExists) {
            throw new AppError("User receiver does not exists. ");
        }

        if (user_sender === user_receiver) {
            throw new AppError("You can't create a compliment to yourself :( ");
        }

        const tagExits = await tagsRepository.findById(tag_id);

        if (!tagExits) {
            throw new AppError("Invalid tag.");
        }

        const compliment = await complimentsRepository.create({
            tag_id, user_sender, user_receiver, message
        });

        return compliment;

    }

}

export { CreateComplimentsService };