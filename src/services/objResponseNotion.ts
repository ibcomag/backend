import translator from "../translator";
import { formatUUID } from "./common";

export function getValues<T>(properties) {
    const response = {};
    for (const key in properties) {
        const obj = properties[key];

        const { type } = obj;
        const valueList = obj[type];
        const value =
            typeof valueList === "object" && valueList.length !== 0
                ? valueList[0].plain_text || valueList[0].file.url
                : valueList;

        const keyTranslator = translator[key] || key.toLowerCase();
        response[keyTranslator] = value;
    }
    return response as T;
}

export function getIdInPage(obj) {
    const page = obj.page;
    const idPage = page.split("-").at(-1);
    const id = formatUUID(idPage);
    return id;
}
