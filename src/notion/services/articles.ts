import { PageObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import { getIdInPage, getValues } from "../../services/objResponseNotion";
import notion from "../main";
import { ArticlesType } from "../../@types/articles";

const dbArticles = process.env.NOTION_DATABASE_ARTICLES;

export const getAllArticles = async () => {
    const response = await notion.databases.query({
        database_id: dbArticles,
    });
    const results = response.results.map((obj: PageObjectResponse) => {
        const newObj: ArticlesType = getValues(obj.properties);
        return { ...newObj, id: obj.id, date: obj.created_time };
    });
    return results;
};

export const getArticlesById = async ({ id }: Partial<ArticlesType>) => {
    // const response: Partial<PageObjectResponse> = await notion.pages.retrieve({
    //     page_id: id,
    // });
    const allArticles = await getAllArticles()
    const response = allArticles.find(({ id }) => id === id)
    // const dataResponse: ArticlesType = getValues(response.properties);
    const idPageContent = getIdInPage(response);
    const responsePage = await notion.blocks.children.list({
        block_id: idPageContent,
    });
    return {
        ...response,
        content: responsePage.results,
    };
};
