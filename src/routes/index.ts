import { Router } from "express";

import { userRoutes } from "./users.routes"
import { tagsRoutes } from "./tags.routes"

const router = Router();

router.use("/users", userRoutes);
router.use("/tags", tagsRoutes);

export { router };