export function formatUUID(uuidStr) {
    return uuidStr.replace(/(.{8})(.{4})(.{4})(.{4})(.{12})/, "$1-$2-$3-$4-$5");
}

export function convertViewUrlForDownload(urlView) {
    const match = urlView.match(/\/d\/(.*?)\/view/);
    const id = match[1];
    const urlDownload = `https://drive.google.com/uc?id=${id}&export=download`;
    return urlDownload;
}
