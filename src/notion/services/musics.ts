import { PageObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import { getValues } from "../../services/objResponseNotion";
import { getFileforDownload } from "../../services/google";
import { MusicsType } from "../../@types/musics";
import notion from "../main";

const dbMusics = process.env.NOTION_DATABASE_MUSICS;

export const getAllMusics = async () => {
    const response = await notion.databases.query({
        database_id: dbMusics,
    });

    const results = await Promise.all(
        response.results.map(async (obj: PageObjectResponse) => {
            const newObj: MusicsType = getValues(obj.properties);
            const letter = await getFileforDownload(newObj.letter);
            const sheet_music = await getFileforDownload(newObj.sheet_music);
            return { ...newObj, id: obj.id, letter, sheet_music };
        })
    );

    return results;
};

export const getMusicsById = async ({ id }: Partial<MusicsType>) => {
    const response: Partial<PageObjectResponse> = await notion.pages.retrieve({
        page_id: id,
    });
    const dataResponse: MusicsType = getValues(response.properties);
    const letter = await getFileforDownload(dataResponse.letter);
    const sheet_music = await getFileforDownload(dataResponse.sheet_music);
    return { ...dataResponse, letter, sheet_music };
};
