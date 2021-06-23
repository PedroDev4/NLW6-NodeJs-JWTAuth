import { Request, Response } from "express";
import { CreateTagsService } from "../services/Tags/CreateTagsService";


class CreateTagsController {

    async handle(request: Request, response: Response): Promise<Response> {
        // Desistruturando objeto "Body" da requsisição
        const { name } = request.body;

        const createTagsService = new CreateTagsService();

        const tag = await createTagsService.execute(name);

        return response.status(201).json(tag);
    }

}

export { CreateTagsController };