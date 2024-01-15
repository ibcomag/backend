import {
    getAllBooks,
    getBooksById,
} from "../notion/services/books";

export const getAll = async (req, res) => {
    const response = await getAllBooks();
    res.json(response);
};

export const getById = async (req, res) => {
    const id: string = req.params.id;
    const response = await getBooksById({ id });
    res.json(response);
};
