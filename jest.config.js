/**
 * For a detailed explanation regarding each configuration property, visit:
 */

/** @type {import('jest').Config} */
const config = {
    clearMocks: true,
    collectCoverage: true,
    coverageDirectory: "coverage",
    coverageProvider: "v8",
    extensionsToTreatAsEsm: [".ts"],
    moduleFileExtensions: [
        "js",
        "mjs",
        "cjs",
        "jsx",
        "ts",
        "tsx",
        "json",
        "node",
    ],
    testMatch: ["**/?(*.)+(spec|test).[jt]s?(x)"],
};

module.exports = config;
