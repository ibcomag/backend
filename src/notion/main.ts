import dotenv from "dotenv";
import { Client } from "@notionhq/client";
dotenv.config();

const notion = new Client({ auth: process.env.NOTION_API_KEY });
export default notion;
