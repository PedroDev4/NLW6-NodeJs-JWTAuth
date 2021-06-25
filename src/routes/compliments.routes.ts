import { Router } from "express";
import { CreateComplimentsController } from "../controllers/CreateComplimentController";
import { ListUserReceivedComplimentsController } from "../controllers/ListUserReceivedComplimentsController";
import { ListUserSentComplimentsController } from "../controllers/ListUserSentComplimentsController";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";

const complimentsRoutes = Router();
const createComplimentsController = new CreateComplimentsController();
const listUserSentComplimentsController = new ListUserSentComplimentsController();
const listUserReceivedComplimentsController = new ListUserReceivedComplimentsController();

complimentsRoutes.post("/", ensureAuthenticated, createComplimentsController.handle);
complimentsRoutes.get("/users/sent", ensureAuthenticated, listUserSentComplimentsController.handle)
complimentsRoutes.get("/users/received", ensureAuthenticated, listUserReceivedComplimentsController.handle);
complimentsRoutes.get("/users/received/:user_id", ensureAuthenticated, listUserReceivedComplimentsController.handle);

export { complimentsRoutes };