export function formatUUID(uuidStr) {
    return uuidStr.replace(/(.{8})(.{4})(.{4})(.{4})(.{12})/, "$1-$2-$3-$4-$5");
}