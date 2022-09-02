/*
 * @Author: tears 596231290@qq.com
 * @Date: 2022-09-02 11:40:17
 * @LastEditors: tears 596231290@qq.com
 * @LastEditTime: 2022-09-02 17:48:59
 * @FilePath: /css/__test__/calc.spec.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import calc, { mactt } from '../src'

test('The calculation result should be 996.', () => {
  expect(calc(1024, 28)).toBe(996)
})
test('The calculation result should be 996.', () => {
  expect(mactt(2)).toBe(4)
})
