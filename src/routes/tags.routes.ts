import { Router } from "express";
import { CreateTagsController } from "../controllers/CreateTagsController";
import { ListTagsController } from "../controllers/ListTagsController";
import { ensureAdmin } from "../middlewares/ensureAdmin";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";

const tagsRoutes = Router();
const createTagsController = new CreateTagsController();
const listTagsController = new ListTagsController();

tagsRoutes.post("/", ensureAuthenticated, ensureAdmin, createTagsController.handle);
tagsRoutes.get("/", ensureAuthenticated, listTagsController.handle);

export { tagsRoutes };