module.exports = {
    parserOptions: {
        sourceType: "module",
        allowImportExportEverywhere: true,
        ecmaVersion: 13,
        ecmaFeatures: {
            jsx: true
        }
    },
    plugins: ["import", "react"],
    rules: {
        "max-len": ["warn", 150], // максимальная длина строки
        "max-statements-per-line": ["warn", {max: 1}], // ограничение на кол-во выражений в 1 строке
        semi: ["error", "always"],
        "comma-dangle": ["warn"],
        "no-multiple-empty-lines": "off",
        indent: ["warn", 4, {SwitchCase: 1}],

        /* variables */
        "no-var": "error", // запрет на использование keyword `var`
        "prefer-const": "warn", // если можно, то использовать const
        "no-const-assign": "error", // ошибка при изменении const
        "no-unused-vars": ["warn", {vars: "local", args: "none"}], // неиспользуемые переменные
        "react/jsx-uses-vars": "error", // "no-unused-vars" распознает переменные, использующиеся только в JSX как no used

        /* literals */
        "prefer-regex-literals": "warn", // использовать регекс литерал вместо конструктора RegExp
        "quotes": ["warn", "double"], // кавычки в строковых литералах

        /* imports */
        "import/no-relative-parent-imports": "error", // использование относительных импортов из родительской директории
        "no-duplicate-imports": ["error"],  // повторный импорт одного и того же модуля
        "react/jsx-uses-react": "error", // чтобы не ругалось на не используемый импорт import React from "react

        /* if else */
        "no-else-return": ["warn", {allowElseIf: false}],
        "no-lonely-if": ["warn"],

        /* function */
        "prefer-arrow-callback": "warn", // в коллбеках использовать arrow function
        "arrow-parens": ["off"], // требование аргумент arrow function обарачивать в скобки
        "arrow-spacing": ["warn", {before: true, after: true}], // пробелы вокруг => в arrow function
        "func-call-spacing": ["warn", "never"], // не ставить пробелы между именем функции и скобками, вызовом функции

        /* object */
        "key-spacing": ["warn", {beforeColon: false, afterColon: true}], // пробел перед и после двоеточия в объекте
        "object-curly-spacing": ["warn", "never"], // пробел между скобками объекта

        /* other spacing */
        "keyword-spacing": ["warn"], // пробелы вокруг ключевых слова (if, while и т.д)
        "array-bracket-spacing": ["warn", "never"], // пробел между скобками массива
        "comma-spacing": ["warn", {after: true}] // пробел после запятой
    }
};
