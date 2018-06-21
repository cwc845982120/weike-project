module.exports = {
    "root": true,
    "parser": "babel-eslint",
    "parserOptions": {
        "ecmaVersion": 6,
        "sourceType": "module",
        "ecmaFeatures": {
            "jsx": true,
            "experimentalObjectRestSpread": true
        }
    },
    "env": {
		"es6": true,
		"node": true,
        "commonjs": true,
        "browser": true
    },
    "plugins": [
        "html", "react", "jsx"
    ],
    "rules": {
        "no-alert": 2,
        "no-const-assign": 2,
        "no-constant-condition": 2,
        "no-debugger": 2,
        "no-dupe-keys": 2,
        "no-dupe-args": 2,
        "no-empty": 2,
        "no-empty-character-class": 2,
        "no-ex-assign": 2,
        "no-extend-native": 2,
        "no-extra-bind": 2,
        "no-extra-boolean-cast": 2,
        "no-extra-semi": 2,
        "no-fallthrough": 2,
        "no-floating-decimal": 2,
        "no-func-assign": 2,
        "no-implicit-coercion": 2,
        "no-inner-declarations": [
            2, "functions"
        ],
        "no-invalid-this": 2,
        "no-irregular-whitespace": 2,
        "no-iterator": 2,
        "no-lone-blocks": 2,
        "no-loop-func": 2,
        "no-mixed-spaces-and-tabs": [
            2, "smart-tabs"
        ],
        "no-multi-spaces": 2,
        "no-multi-str": 2,
        "no-multiple-empty-lines": [
            2, {
                "max": 1
            }
        ],
        "no-nested-ternary": 2,
        "no-new": 2,
        "no-new-wrappers": 2,
        "no-param-reassign": 2,
        "no-redeclare": 2,
        "no-regex-spaces": 2,
        "no-return-assign": 2,
        "no-script-url": 2,
        "no-self-compare": 2,
        "no-sequences": 2,
        "no-shadow": 2,
        "no-shadow-restricted-names": 2,
        "no-spaced-func": 2,
        "no-sparse-arrays": 2,
        "no-trailing-spaces": 1,
        "no-throw-literal": 2,
        "no-undef": 2,
        "no-undef-init": 2,
        "no-undefined": 2,
        "no-unneeded-ternary": 2,
        "no-unreachable": 2,
        "no-unused-expressions": 2,
        "no-unused-vars": [
            1, {
                "vars": "all",
                "args": "after-used"
            }
        ],
		"no-use-before-define": 2,
		"no-useless-call": 2,
		"no-var": 2,
        "no-void": 2,
        "no-warning-comments": [
            1, {
                "terms": ["warning"],
                "location": "start"
            }
        ],
        "no-with": 2,
        "array-bracket-spacing": [
            2, "never"
        ],
        "block-scoped-var": 2,
        "brace-style": [
            1, "1tbs"
        ],
        "callback-return": 2,
        "comma-dangle": [
            2, "never"
        ],
        "comma-spacing": 2,
        "comma-style": [
            2, "last"
        ],
        "complexity": [
            2, 4
        ],
        "consistent-this": [
            0, "self"
        ],
        "constructor-super": 2,
        "dot-notation": [
            2, {
                "allowKeywords": true
            }
        ],
        "indent": [
            2,
            "tab", {
                "MemberExpression": 0,
                "FunctionDeclaration": {
                    "body": 1
                },
                "FunctionExpression": {
                    "body": 1
                },
                "CallExpression": {
                    "arguments": 1
                },
                "ArrayExpression": 1,
                "ObjectExpression": 1
            }
        ],
        "key-spacing": [
            2, {
                "beforeColon": false,
                "afterColon": true
            }
        ],
        "quotes": [
            0, "double"
        ],
        "semi": [
            2, "always"
        ],
        "keyword-spacing": 2,
        "space-before-blocks": [
            2, "always"
        ],
        "space-unary-ops": [
            2, {
                "words": true
            }
        ],
        "spaced-comment": 2,
        "strict": 2,
        "wrap-regex": 2
    }
}
