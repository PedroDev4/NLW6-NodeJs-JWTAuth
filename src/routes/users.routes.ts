import { Router } from "express";
import { AuthenticateUserController } from "../controllers/AuthenticateUserController";
import { CreateUserController } from "../controllers/CreateUserController";
import { ListUsersController } from "../controllers/ListUsersController";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";

const userRoutes = Router();

const createUserController = new CreateUserController();
const authenticateUserController = new AuthenticateUserController();
const listUsersController = new ListUsersController();

userRoutes.post("/", createUserController.handle);
userRoutes.post("/sessions", authenticateUserController.handle);
userRoutes.get("/", ensureAuthenticated, listUsersController.handle);

export { userRoutes };