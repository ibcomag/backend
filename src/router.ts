import { Router } from "express";

import * as devotionals from "./controller/devotionals";
import * as articles from "./controller/articles";
import * as musics from "./controller/musics";
import * as books from "./controller/books";

const router = Router();

router.get("/devotionals", devotionals.getAll);
router.get("/devotionals/:id", devotionals.getById);

router.get("/books", books.getAll);
router.get("/books/:id", books.getById);

router.get("/articles", articles.getAll);
router.get("/articles/:id", articles.getById);

router.get("/musics", musics.getAll);
router.get("/musics/:id", musics.getById);

export default router;
