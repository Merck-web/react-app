const path = require("path");
const resolve = arg => path.resolve(__dirname, arg)

module.exports = {
    webpack: {
        alias: {
            "~": resolve("src/"),
            "@components": resolve("src/components"),
            "@utils": resolve("src/utils"),
            "@main": resolve("src/main"),
        }
    },
    jest: {
        configure: {
            moduleNameMapper: {
                "^~(.*)$": "<rootDir>/src$1",
            },
            roots: ["<rootDir>/src/", "<rootDir>/test/"],
            testMatch: ["<rootDir>/test/**/?(*.)+(spec|test).[jt]s?(x)"],
            setupFilesAfterEnv: "<rootDir>/test/setupTests.ts"
        }
    },
};