import { Request, Response } from "express";
import { ListTagsService } from "../services/Tags/ListTagsService";


class ListTagsController {

    async handle(request: Request, response: Response): Promise<Response> {

        const listTagsService = new ListTagsService();

        const tags = await listTagsService.execute();

        return response.json(tags);
    }

}

export { ListTagsController };