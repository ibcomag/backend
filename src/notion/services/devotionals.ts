import { getValues } from "../../services/objResponseNotion";
import notion from "..";

const dbDevotionals = process.env.NOTION_DATABASE_DEVOTIONALS;

export const getAllDevotionals = async () => {
    const response = await notion.databases.query({
        database_id: dbDevotionals as string
    })
    const results = getValues(response.results)
    return results;
}