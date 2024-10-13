module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended",
    "prettier",
    "plugin:jsx-a11y/recommended"
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parserOptions: { ecmaVersion: "latest", sourceType: "module" },
  settings: {
    react: {
      version: "18.3"
    }
  },
  plugins: ["react-refresh", "prettier", "jsx-a11y", "react", "simple-import-sort"],
  rules: {
    "react/jsx-uses-vars": "error",
    "react/jsx-uses-react": "error",
    "jsx-a11y/label-has-associated-control": "off",
    "jsx-a11y/label-has-for": "off",
    "react/react-in-jsx-scope": 0,
    "react-hooks/rules-of-hooks": "error",
    "no-console": 0,
    "react/state-in-constructor": 0,
    "linebreak-style": 0,
    "react/prop-types": 0,
    "jsx-a11y/click-events-have-key-events": 0,
    "import/no-unresolved": 0,
    "import/extensions": 0,
    "no-underscore-dangle": 0,
    "react-hooks/exhaustive-deps": 0,
    "import/named": 0,
    "react/destructuring-assignment": 0,
    "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }],
    "react/no-unescaped-entities": 0,
    "react-refresh/only-export-components": ["warn", { allowConstantExport: true }],
    "react/jsx-filename-extension": [
      1,
      {
        extensions: [".js", ".jsx"]
      }
    ],
    // enable additional rules
    indent: ["error", 2],
    quotes: ["error", "double"],
    semi: ["error", "always"],
    "block-spacing": 2,
    "no-trailing-spaces": "error",
    "space-before-blocks": ["error", "always"],
    "object-curly-spacing": ["error", "always"],
    "no-unused-vars": "error",
    "no-duplicate-imports": "error",
    "no-empty-pattern": "error",
    "no-multiple-empty-lines": ["error", { max: 3, maxBOF: 1 }],
    "no-unexpected-multiline": "error",
    "no-use-before-define": "error",
    "no-else-return": "error",
    "no-loop-func": "error",
    camelcase: "error",
    curly: ["error", "multi"],
    "no-alert": "error",
    "no-empty": "error",
    "no-empty-function": "error",
    "no-nested-ternary": "error",
    "arrow-spacing": "error",
    "max-params": ["error", 3],
    "object-curly-spacing": ["error", "always"],
    "block-spacing": "error",
    "spaced-comment": "error",
    "space-infix-ops": "error",
    "simple-import-sort/imports": [
      // for this config we have to install: npm install --save-dev eslint-plugin-simple-import-sort
      "error",
      {
        groups: [
          // 1. Side effect imports at the start. For me this is important because I want to import reset.css and global styles at the top of my main file.
          ["^\\u0000"],
          // 2. `react` and packages: Things that start with a letter (or digit or underscore), or `@` followed by a letter.
          ["^react$", "^@?\\w"],
          // 3. Absolute imports and other imports such as Vue-style `@/foo`.
          // Anything not matched in another group. (also relative imports starting with "../")
          ["^@", "^"],
          // 4. relative imports from same folder "./" (I like to have them grouped together)
          ["^\\./"],
          // 5. style module imports always come last, this helps to avoid CSS order issues
          ["^.+\\.(module.css|module.scss)$"],
          // 6. media imports
          ["^.+\\.(gif|png|svg|jpg)$"]
        ]
      }
    ]
  }
};
