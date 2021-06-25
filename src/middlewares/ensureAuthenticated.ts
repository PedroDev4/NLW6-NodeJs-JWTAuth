import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
import { UsersRepository } from "../repositories/implementations/UsersRepository";
import { AppError } from "../shared/Errors/AppError";

interface IPayload {
    sub: string;
}

async function ensureAuthenticated(request: Request, response: Response, next: NextFunction) {

    // Receber o token da requisição

    // Bearer ejasuhearjEJHSAJEHAHEJejkjaksekjak
    const authToken = request.headers.authorization;

    // Validar se o token está preenchido
    if (!authToken) {
        return response.status(401).end();
    }

    // Split Transforma nossa string em um array de duas partes separados pelo "ESPAÇO" 
    // EX: ['Bearer','eokaseji293lakKK3EJSAKJEAJKJ']a
    const [, token] = authToken.split(" ");


    // Validar se o token é valido;
    try {

        // Recuperar informações do usuário através do token;
        const { sub: id } = verify(token, process.env.JWT_SECURITY_KEY) as IPayload; // Forçando o retorno da função verify ser do tipo IPayload

        const usersRepository = new UsersRepository();
        const user = await usersRepository.findById(id);

        if (!user) {
            throw new AppError("User does not exists.");
        }

        request.user_id = id;

    } catch (err) {

        return response.status(401).json({
            error: "Invalid Token"
        });

    }

    return next();
}

export { ensureAuthenticated };