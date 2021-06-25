import { Compliment } from "../../entities/Compliment";
import { ComplimentRepository } from "../../repositories/implementations/ComplimentsRepository";


class ListUserSentComplimentsService {

    async execute(user_id: string): Promise<Compliment[]> {
        const complimentsRepository = new ComplimentRepository();

        const compliements = await complimentsRepository.findManyByUserSender(user_id);

        return compliements;
    }

}

export { ListUserSentComplimentsService }