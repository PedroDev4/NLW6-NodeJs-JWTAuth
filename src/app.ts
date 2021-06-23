import "reflect-metadata";
import express, { NextFunction, Request, Response } from "express";
import "express-async-errors";
import { connectToDB } from "./database";
import { router } from './routes';
import { AppError } from "./shared/Errors/AppError";

const app = express();

connectToDB();

app.use(express.json());
app.use(router);

// Middlewares
/* Middlaware para interceptar o Error (Exception) */
app.use((err: Error, request: Request, response: Response, next: NextFunction) => {
    if (err instanceof AppError) {
        return response.status(err.statusCode).json({ error: err.message });
    }
    // O que nao for um erro tratado vamos entender como errors internos do servidor.
    return response.status(500).json({
        status: "error",
        message: `Internal server error ${err.message}`
    });
});

export { app };