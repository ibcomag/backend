const { pathFunctions } = require("../config");
const { getIdInPage } = require(`${pathFunctions}/objResponseNotion`);

test("Testando se está pegando o id da pagina do notion corretamente", () => {
    const page =
        "https://www.notion.so/test-240b4e1712f04804b63962a266cce15d?pvs=4";
    const uuid = getIdInPage({ page });
    const idExpect = "240b4e17-12f0-4804-b639-62a266cce15d";
    const regexUUID =
        /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/;
    expect(uuid).toBe(idExpect);
    expect(uuid).toMatch(regexUUID);
});