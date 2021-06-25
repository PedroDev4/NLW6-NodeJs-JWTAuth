import { Request, Response } from "express";
import { CreateUserService } from "../services/Users/CreateUserService";

class CreateUserController {

    async handle(request: Request, response: Response): Promise<Response> {

        const { name, email, isAdmin, password } = request.body;

        const createUserService = new CreateUserService();

        const user = await createUserService.execute({
            name, email, isAdmin, password
        });

        return response.status(201).json(user);
    }

}

export { CreateUserController };