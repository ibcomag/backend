import {
    getAllArticles,
    getArticlesById,
} from "../notion/services/articles";

export const getAll = async (req, res) => {
    const response = await getAllArticles();
    res.json(response);
};

export const getById = async (req, res) => {
    const id: string = req.params.id;
    const response = await getArticlesById({ id });
    res.json(response);
};
