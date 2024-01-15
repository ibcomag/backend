import { PageObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import { getValues } from "../../services/objResponseNotion";
import notion from "../main";
import { MusicsType } from "../../@types/musics";

const dbMusics = process.env.NOTION_DATABASE_MUSICS;

export const getAllMusics = async () => {
    const response = await notion.databases.query({
        database_id: dbMusics,
    });
    const results = response.results.map((obj: PageObjectResponse) => {
        const newObj: MusicsType = getValues(obj.properties);
        return { ...newObj, id: obj.id };
    });
    return results;
};

export const getMusicsById = async ({ id }: Partial<MusicsType>) => {
    const response: Partial<PageObjectResponse> = await notion.pages.retrieve({
        page_id: id,
    });
    const dataResponse: MusicsType = getValues(response.properties);
    return dataResponse;
};
