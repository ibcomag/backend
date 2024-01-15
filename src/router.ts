import { Router } from "express";

import * as devotionals from "./controller/devotionals";
import * as articles from "./controller/articles";
import * as books from "./controller/books";

const router = Router();

router.get("/devotionals", devotionals.getAll);
router.get("/devotionals/:id", devotionals.getById);

router.get("/books", books.getAll);
router.get("/books/:id", books.getById);

router.get("/articles", articles.getAll);
router.get("/articles/:id", articles.getById);

export default router;
