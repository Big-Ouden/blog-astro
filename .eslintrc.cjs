// .eslintrc.cjs
module.exports = {
  parser: "@typescript-eslint/parser",
  plugins: ["astro"],
  extends: ["plugin:astro/recommended"],
  overrides: [
    {
      files: ["*.astro"],
      parser: "astro-eslint-parser",
      parserOptions: {
        parser: "@typescript-eslint/parser",
        extraFileExtensions: [".astro"],
      },
    },
  ],
  env: {
    browser: true,
    es2021: true,
  },
};
