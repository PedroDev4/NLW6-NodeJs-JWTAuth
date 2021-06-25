import { Compliment } from "../../entities/Compliment";
import { ComplimentRepository } from "../../repositories/implementations/ComplimentsRepository";



class ListUserReceivedComplimentsService {

    async execute(user_id: string): Promise<Compliment[]> {
        const complimentsRepository = new ComplimentRepository();

        const compliements = await complimentsRepository.findManyByUserReceiver(user_id);

        return compliements;
    }

}

export { ListUserReceivedComplimentsService };