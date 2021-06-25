import { Request, Response, NextFunction } from "express";
import { UsersRepository } from "../repositories/implementations/UsersRepository";

async function ensureAdmin(request: Request, response: Response, next: NextFunction) {
    const { user_id } = request;


    // Verificar se usuario admin
    const usersRepository = new UsersRepository();
    const user = await usersRepository.findById(user_id);

    if (!user.isAdmin) {
        return response.status(401).json({
            error: "Unauthorized user."
        });
    }

    return next();
}

export { ensureAdmin };