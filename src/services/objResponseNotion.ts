export function getValues(properties) {
    const response = {};
    for (const key in properties) {
        const obj = properties[key];

        const { type } = obj;
        const value = obj[type][0].plain_text;

        response[key] = value;
    }
    return response;
}