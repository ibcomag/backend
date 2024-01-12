import { getAllDevotionals } from "../notion/services/devotionals";

export const getAll = async (req, res) => {
    const response = await getAllDevotionals();
    res.json(response);
};

export const getById = async (req, res) => {
    res.send("Em construção");
};
