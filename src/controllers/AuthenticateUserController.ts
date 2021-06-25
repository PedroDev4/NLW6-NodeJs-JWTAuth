import { Request, Response } from "express";
import { AuthenticateUserService } from "../services/Users/AuthenticateUserService";


class AuthenticateUserController {

    async handle(request: Request, response: Response): Promise<Response> {
        const { email, password } = request.body;

        const authenticateUserService = new AuthenticateUserService();

        const token = await authenticateUserService.execute(email, password);

        return response.status(201).json(token);
    }

}

export { AuthenticateUserController };