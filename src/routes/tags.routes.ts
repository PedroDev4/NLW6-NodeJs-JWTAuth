import { Router } from "express";
import { CreateTagsController } from "../controllers/CreateTagsController";
import { ensureAdmin } from "../middlewares/ensureAdmin";

const tagsRoutes = Router();
const createTagsController = new CreateTagsController();

tagsRoutes.post("/", ensureAdmin, createTagsController.handle);

export { tagsRoutes };