import {
    getAllDevotionals,
    getDevotionalById,
} from "../notion/services/devotionals";

export const getAll = async (req, res) => {
    const response = await getAllDevotionals();
    res.json(response);
};

export const getById = async (req, res) => {
    const id: string = req.params.id;
    const response = await getDevotionalById({ id });
    res.json(response);
};
