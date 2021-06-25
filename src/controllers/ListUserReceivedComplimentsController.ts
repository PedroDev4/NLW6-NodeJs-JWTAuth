import { Request, Response } from "express";
import { ListUserReceivedComplimentsService } from "../services/Compliments/ListUserReceivedComplimentsService";


class ListUserReceivedComplimentsController {

    async handle(request: Request, response: Response): Promise<Response> {

        let { user_id } = request.params;

        if (!user_id) {
            user_id = request.user_id; // Se o ID nao vier nos params, iremos entender que o usuário quer visualizar os elogios que ELE mesmo recebeu 
        }

        const listUserReceivedComplimentsService = new ListUserReceivedComplimentsService();

        const compliments = await listUserReceivedComplimentsService.execute(user_id);

        return response.json(compliments);

    }

}

export { ListUserReceivedComplimentsController };