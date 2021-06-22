import { Request, Response } from "express";
import { CreateUserService } from "../services/Users/CreateUserService";

class CreateUserController {

    async handle(request: Request, response: Response): Promise<Response> {

        const { name, email, isAdmin } = request.body;

        const createUserService = new CreateUserService();

        const user = await createUserService.execute({
            name, email, isAdmin
        });

        return response.status(201).json(user);
    }

}

export { CreateUserController };