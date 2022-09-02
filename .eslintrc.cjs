/*
 * @Author: tears 596231290@qq.com
 * @Date: 2022-09-02 11:09:45
 * @LastEditors: tears 596231290@qq.com
 * @LastEditTime: 2022-09-02 17:21:18
 * @FilePath: /css/.eslintrc.cjs
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true
    },
    extends: [
        'standard',
        'eslint-config-standard-with-typescript',
        "prettier",
        'eslint:recommended',
        'plugin:vue/vue3-essential',
        'plugin:@typescript-eslint/recommended'
    ],
    overrides: [
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        // project: './tsconfig.json'
        project: './tsconfig.eslint.json'
    },
    plugins: [
        'vue',
        '@typescript-eslint',
        'prettier'
    ],
    rules: {
        'prettier/prettier': 'error'
    }
}
