const { pathFunctions } = require("../config");
const {
    formatUUID,
    convertViewUrlForDownload,
} = require(`${pathFunctions}/common`);

test("Testando se está convertendo em uuid corretamente", () => {
    const idLink = "240b4e1712f04804b63962a266cce15d";
    const uuid = formatUUID(idLink);
    const idExpect = "240b4e17-12f0-4804-b639-62a266cce15d";
    const regexUUID =
        /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/;
    expect(uuid).toBe(idExpect);
    expect(uuid).toMatch(regexUUID);
});

test("Testando se está convertendo em url de download corretamente", () => {
    const urlGoogleDrive =
        "https://drive.google.com/file/d/240b4e1712f04804b63962a266cce15d/view?usp=sharing";
    const expectedUrl =
        "https://drive.google.com/uc?id=240b4e1712f04804b63962a266cce15d&export=download";
    const downloadUrl = convertViewUrlForDownload(urlGoogleDrive);
    expect(downloadUrl).toBe(expectedUrl);
});
