import { PageObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import { getValues } from "../../services/objResponseNotion";
import notion from "../main";
import { BooksType } from "../../@types/books";

const dbBooks = process.env.NOTION_DATABASE_BOOKS;

export const getAllBooks = async () => {
  const response = await notion.databases.query({
    database_id: dbBooks,
  });
  const results = response.results.map((obj: PageObjectResponse) => {
    const newObj: BooksType = getValues(obj.properties);
    return { ...newObj, id: obj.id };
  });
  return results;
};

export const getBooksById = async ({ id }: Partial<BooksType>) => {
  const response: Partial<PageObjectResponse> = await notion.pages.retrieve({
    page_id: id,
  });
  const dataResponse: BooksType = getValues(response.properties);
  return { ...dataResponse, id };
};
