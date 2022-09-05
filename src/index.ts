/*
 * @Author: tears 596231290@qq.com
 * @Date: 2022-09-02 11:05:49
 * @LastEditors: tears 596231290@qq.com
 * @LastEditTime: 2022-09-05 10:54:27
 * @FilePath: /css/src/index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

/**
 *  计算
 * @param a 减数
 * @param b 被减数
 * @returns 值
 */
const calc = (a: number, b: number): number => {
  return a - b
}
// calc(1024, 28)
calc(1024, 28)
export const mactt = (a: number): number => {
  return a * 2
}
console.log(mactt(10))
export default calc
