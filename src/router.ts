import { Router } from "express";

import * as devotionals from "./controller/devotionals";

const router = Router();

router.get("/devotionals", devotionals.getAll);
router.get("/devotionals/:id", devotionals.getById);

export default router;
