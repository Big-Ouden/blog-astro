const {
    defineConfig,
} = require("eslint/config");

const tsParser = require("@typescript-eslint/parser");
const astro = require("eslint-plugin-astro");
const parser = require("astro-eslint-parser");
const globals = require("globals");
const js = require("@eslint/js");

const {
    FlatCompat,
} = require("@eslint/eslintrc");

const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

module.exports = defineConfig([{
    languageOptions: {
        parser: tsParser,

        globals: {
            ...globals.browser,
        },
    },

    plugins: {
        astro,
    },

    extends: compat.extends("plugin:astro/recommended"),
}, {
    files: ["**/*.astro"],

    languageOptions: {
        parser: parser,

        parserOptions: {
            parser: "@typescript-eslint/parser",
            extraFileExtensions: [".astro"],
        },
    },
}]);
