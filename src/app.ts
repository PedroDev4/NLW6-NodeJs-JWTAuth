import "reflect-metadata";
import express from "express";
import { connectToDB } from "./database";
import { router } from './routes';

const app = express();

connectToDB();

app.use(express.json());

app.use(router);

export { app };