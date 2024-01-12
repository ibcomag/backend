import { NextFunction, Request, Response } from "express";

const errorMiddleware = (
    error: any,
    req: Request,
    res: Response,
    next: NextFunction
) => {
    console.error("error", error);
    res.status(400);

    if (!error) {
        return res.status(500).send("Unknown server error");
    }

    if (typeof error.status === "number") {
        res.status(error.status);
    }

    if (error.name === "PrismaClientValidationError") {
        const splitMessage = error.message.split("\n");
        const message = splitMessage.at(-1);
        res.send(message);
    }

    if (typeof error.message === "string") {
        return res.send(error.message);
    }

    if (typeof error.inner?.message === "string") {
        return res.send(error.inner.message);
    }

    return res.send("Unknown server error");
};

export default errorMiddleware;
