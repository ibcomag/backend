import { PageObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import { getIdInPage, getValues } from "../../services/objResponseNotion";
import notion from "../main";
import { DevotionalsType } from "../../@types/devotionals";

const dbDevotionals = process.env.NOTION_DATABASE_DEVOTIONALS;

export const getAllDevotionals = async () => {
    const response = await notion.databases.query({
        database_id: dbDevotionals,
    });
    const results = response.results.map((obj: PageObjectResponse) => {
        const newObj: DevotionalsType = getValues(obj.properties);
        return { ...newObj, id: obj.id, date: obj.created_time };
    });
    return results;
};

export const getDevotionalById = async ({ id }: Partial<DevotionalsType>) => {
    const response: Partial<PageObjectResponse> = await notion.pages.retrieve({
        page_id: id,
    });
    const dataResponse: DevotionalsType = getValues(response.properties);
    const idPageContent = getIdInPage(dataResponse);
    const responsePage = await notion.blocks.children.list({
        block_id: idPageContent,
    });
    return {
        id,
        ...dataResponse,
        date: response.created_time,
        content: responsePage.results,
    };
};
