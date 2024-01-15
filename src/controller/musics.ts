import { getAllMusics, getMusicsById } from "../notion/services/musics";

export const getAll = async (req, res) => {
    const response = await getAllMusics();
    res.json(response);
};

export const getById = async (req, res) => {
    const id: string = req.params.id;
    const response = await getMusicsById({ id });
    res.json(response);
};
