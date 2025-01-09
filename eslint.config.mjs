import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

module.exports = {
  parser: '@babel/eslint-parser', // or '@typescript-eslint/parser' for TypeScript
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    'semi': 'error',
  },
};

const eslintConfig = [...compat.extends("next/core-web-vitals")];

export default eslintConfig;
