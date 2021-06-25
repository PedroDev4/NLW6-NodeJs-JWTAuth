import { Router } from "express";

import { userRoutes } from "./users.routes"
import { tagsRoutes } from "./tags.routes"
import { complimentsRoutes } from "./compliments.routes"

const router = Router();

router.use("/users", userRoutes);
router.use("/tags", tagsRoutes);
router.use("/compliments", complimentsRoutes);

export { router };