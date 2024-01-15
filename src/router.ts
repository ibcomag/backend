import { Router } from "express";

import * as devotionals from "./controller/devotionals";
import * as books from "./controller/books";

const router = Router();

router.get("/devotionals", devotionals.getAll);
router.get("/devotionals/:id", devotionals.getById);

router.get("/books", books.getAll);
router.get("/books/:id", books.getById);

export default router;
