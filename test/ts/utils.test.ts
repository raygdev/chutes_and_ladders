// Copyright 2023 Ryan McGuinness
// 
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
// 
//     http://www.apache.org/licenses/LICENSE-2.0
// 
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import { Die } from '../../src/js/model/die'
import { IDie, ISummedRoll } from '../../src/ts/model/interfaces';
import '../../src/ts/model/die'
import utils from '../../src/ts/model/utils'

let D6: IDie;
let D5: IDie;
let D4: IDie;

beforeAll(() => {
  D6 = new Die(6)
  D5 = new Die(5)
  D4 = new Die(4)
})

test('test random number function returns >=1 and <=6 100 times', () => {
  let times = 100
  for(let i = 0; i < times; i++) {
    let number = utils.GenerateRandomNumber(6)
    expect(number).toBeGreaterThanOrEqual(1)
    expect(number).toBeLessThanOrEqual(6)
  }
})

test('test random number function returns >=1 and <=20 100 times', () => {
  let times = 100
  for(let i = 0; i < times; i++) {
    let number = utils.GenerateRandomNumber(20)
    expect(number).toBeGreaterThanOrEqual(1)
    expect(number).toBeLessThanOrEqual(20)
  }
})

test("test RollDice function", () => {
  const numbers: number[] = utils.RollDice([D6, D4, D5])
  expect(numbers).toHaveLength(3)
  numbers.forEach((number: number) => {
    expect(typeof number).toBe("number")
  })
})

test("test RollSingleDiceMultipleTimes function", () => {
  let multipleRolls: number[] = utils.RollSingleDiceMultipleTimes(6, D6)
  expect(Array.isArray(multipleRolls)).toBe(true)
  expect(multipleRolls).toHaveLength(6)
  multipleRolls.forEach((number: number) => {
    expect(typeof number).toBe('number')
    expect(number).toBeGreaterThanOrEqual(1)
    expect(number).toBeLessThanOrEqual(D6.sides)
  })
})

test("test RollMultipleDiceAndSum", () => {
  let summed: ISummedRoll = utils.RollMultipleDiceAndSum([D6, D5, D4])
  let sum: number = summed.rolledValues.reduce((prev, curr) => prev + curr)
  expect(summed).toBeTruthy()
  expect(summed.rolledValues).toHaveLength(3)
  expect(typeof summed.sum).toBe("number")
  expect(summed.sum).toEqual(sum)
  summed.rolledValues.forEach((number: number) => {
    expect(typeof number).toBe("number")
  })

})

test("test RollMultipleDiceMultipleTimes", () => {
  let dice: IDie[] = [D6, D5, D4]
  let multipleRolledDice: number[][] = utils.RollMultipleDiceMultipleTimes(5, ...dice)
  expect(multipleRolledDice).toBeTruthy()
  expect(multipleRolledDice).toHaveLength(3)
  expect(Array.isArray(multipleRolledDice)).toBe(true)
  multipleRolledDice.forEach((roll: number[]) => {
    expect(roll).toBeTruthy()
    expect(Array.isArray(roll)).toBe(true)
    expect(roll).toHaveLength(5)
    roll.forEach((number: number) => {
      expect(typeof number).toBe("number")
    })
  })
})