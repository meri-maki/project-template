module.exports = {
    root: true,
    env: { browser: true, es2020: true, node: true },
    extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:react-hooks/recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:import/recommended"
    ],
    ignorePatterns: ["dist", ".eslintrc.cjs"],
    parser: "@typescript-eslint/parser",
    plugins: ["react-refresh", "react", "prettier", "react-hooks"],
    parserOptions: {
        ecmaVersion: 2020,
        sourceType: "module",
        ecmaFeatures: {
            jsx: true
        }
    },
    settings: {
        react: {
            version: "detect"
        }
    },
    rules: {
        "no-inner-declarations": "off",
        "@typescript-eslint/no-unused-vars": ["warn"],
        semi: ["off", "always"],
        quotes: ["off", "double"],
        "react/jsx-indent": [2, 4],
        "react/jsx-indent-props": [2, 4],
        "no-param-reassign": "warn",
        "func-names": "off",
        eqeqeq: "warn",
        "import/no-unresolved": "off",
        "no-return-assign": "off",
        "import/extensions": "off",
        "no-console": "off",
        indent: ["off", 4],
        "no-underscore-dangle": "off",
        "react/react-in-jsx-scope": "off",
        "react/prop-types": "off",
        "no-unused-vars": ["warn", { argsIgnorePattern: "^(require|_)" }],
        "react/button-has-type": "warn",
        "react/jsx-filename-extension": [2, { extensions: [".js", ".jsx", ".tsx"] }],
        "no-nested-ternary": "off",
        "react/jsx-props-no-spreading": "off",
        "react/no-children-prop": "warn",
        "no-mixed-spaces-and-tabs": "off",
        "react/display-name": "off",
        "jsx-a11y/click-events-have-key-events": "off",
        "jsx-a11y/no-static-element-interactions": "off",
        "jsx-a11y/no-noninteractive-element-interactions": "off",
        "react-hooks/rules-of-hooks": "error", // Checks rules of Hooks
        "react-hooks/exhaustive-deps": "error", // Checks effect dependencies
        "import/prefer-default-export": "off",
        "no-shadow": "off",
        "no-plusplus": "off",
        "react/function-component-definition": "off",
        "@typescript-eslint/no-explicit-any": "off",
        "prettier/prettier": [
            "error",
            {
                // Add Prettier options here
                semi: false,
                singleQuote: false,
                printWidth: 120,
                tabWidth: 4,
                trailingComma: "none",
                jsxBracketSameLine: false
            }
        ],
        "import/named": "off"
    }
}
