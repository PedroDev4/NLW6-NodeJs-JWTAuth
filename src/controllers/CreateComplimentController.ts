import { Request, Response } from "express";
import { CreateComplimentsService } from "../services/Compliments/CreateComplimentsService";


class CreateComplimentsController {

    async handle(request: Request, response: Response): Promise<Response> {
        const { user_id } = request;
        const { tag_id, user_receiver, message } = request.body;

        const createComplimentsService = new CreateComplimentsService();

        const compliment = await createComplimentsService.execute({
            tag_id, user_sender: user_id, user_receiver, message
        });

        return response.status(201).json(compliment);
    }

}

export { CreateComplimentsController };