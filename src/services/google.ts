import { google } from "googleapis";
import dotenv from "dotenv";
dotenv.config();

const auth = new google.auth.GoogleAuth({
    keyFile: "./src/credentials.json",
    scopes: ["https://www.googleapis.com/auth/drive"],
});

const drive = google.drive({ version: "v3", auth });

export const getFileforDownload = async (link: string) => {
    const driveResponse = await drive.files.list({
        fields: "files(webViewLink, webContentLink, kind, id)",
    });
    const listFiles = driveResponse.data.files;
    const file = listFiles.find((obj) => obj.webViewLink.includes(link));
    return file?.webContentLink;
};
