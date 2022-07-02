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
        "max-len": ["warn", 150],
        "max-statements-per-line": ["warn", {max: 1}],
        semi: ["error", "always"],
        "comma-dangle": ["warn"],
        "no-multiple-empty-lines": "off",
        indent: ["warn", 4, {SwitchCase: 1}],

        /* variables */
        "no-var": "error",
        "prefer-const": "warn",
        "no-const-assign": "error",
        "no-unused-vars": ["warn", {vars: "local", args: "none"}],
        "react/jsx-uses-vars": "error",

        /* literals */
        "prefer-regex-literals": "warn",
        "quotes": ["warn", "double"],

        /* imports */
        "import/no-relative-parent-imports": "error",
        "no-duplicate-imports": ["error"],
        "react/jsx-uses-react": "error",

        /* if else */
        "no-else-return": ["warn", {allowElseIf: false}],
        "no-lonely-if": ["warn"],

        /* function */
        "prefer-arrow-callback": "warn",
        "arrow-parens": ["off"],
        "arrow-spacing": ["warn", {before: true, after: true}],
        "func-call-spacing": ["warn", "never"],

        /* object */
        "key-spacing": ["warn", {beforeColon: false, afterColon: true}],
        "object-curly-spacing": ["warn", "never"],

        /* other spacing */
        "keyword-spacing": ["warn"],
        "array-bracket-spacing": ["warn", "never"],
        "comma-spacing": ["warn", {after: true}]
    }
};
