import { DevotionalsType } from "../@types/devotionals";
import translator from "../translator";
import { formatUUID } from "./common";

type TypeResponse = DevotionalsType;

export function getValues(properties) {
    const response = {};
    for (const key in properties) {
        const obj = properties[key];

        const { type } = obj;
        const valueList = obj[type];
        const value =
            typeof valueList === "object" ? valueList[0].plain_text : valueList;

        const keyTranslator = translator[key] || key;
        response[keyTranslator] = value;
    }
    return response as TypeResponse;
}

export function getIdInPage(obj: TypeResponse) {
    const page = obj.page;
    const idPage = page.split("-").at(-1);
    const id = formatUUID(idPage);
    return id;
}