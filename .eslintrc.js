module.exports = {
    root: true,
    extends: [
        '@react-native-community',
        'plugin:@typescript-eslint/recommended',
    ],
    parser: '@typescript-eslint/parser',
    plugins: [
        '@typescript-eslint',
    ],
    rules: {
        'indent': ['error', 4],
        'prettier/prettier': 'off',
        'quotes': [
            'error',
            'single',
        ],
        'getter-return': 'error',
        'no-await-in-loop': 'error',
        'no-console': [
            'error',
            {
                'allow': [
                    'warn',
                    'error',
                ],
            },
        ],
        'semi': ['error', 'never'],
        'comma-dangle': 'off',
        'no-trailing-spaces': ['error', {
            'skipBlankLines': true,
            'ignoreComments': true,
        }],
        '@typescript-eslint/no-unused-vars': ['error', {'args': 'none'}],
        '@typescript-eslint/no-var-requires': 'off',
        '@typescript-eslint/no-empty-interface': 'off',
        '@typescript-eslint/no-namespace': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/ban-types': 'off',
        '@typescript-eslint/interface-name-prefix': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/camelcase': 'off',
        '@typescript-eslint/member-delimiter-style': ['error', {
            'multiline': {
                'delimiter': 'none'
            }
        }],
        'react-hooks/exhaustive-deps': 'off',
        'react/display-name': 'off',
    }
}
