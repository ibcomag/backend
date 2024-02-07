import express from "express";
import "express-async-errors";
import cors from "cors";

import handleError from "./middlewares/handleError";
import router from "./router";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/api/v1", router);
app.use(handleError);

const port = Number(process.env.PORT) || 3000;
app.listen(port, "0.0.0.0", () =>
    console.log(`Aplication running in port ${port}`)
);
