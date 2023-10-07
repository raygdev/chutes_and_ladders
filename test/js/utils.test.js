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

import {
   generateRandomNumber, rollMultipleAndSum, rollMultipleDiceMultipleTimes, rollSingleDiceMultipleTimes 
  } 
  from '../../src/js/model/utils'
import { Die } from "../../src/js/model/die"
import { SummedRoll } from '../../src/js/model/summed_roll';
import { type } from 'os';

let timesToCall;
let D6, D5, D4, dice;

beforeAll(() => {
  timesToCall = 100
  D6 = new Die(6)
  D5 = new Die(5)
  D4 = new Die(4)
  dice = [D6, D5, D4]

})

test('Generates a random number between 1 and 6', () => {
  for(let i = 0; i < timesToCall; i++){
    let random = generateRandomNumber(6)
    expect(random).toBeGreaterThanOrEqual(1)
  } 
})

test('Generates a random number between 1 and 20', () => {
  for(let i = 0; i < timesToCall; i++){
    let random = generateRandomNumber(20)
    expect(random).toBeGreaterThanOrEqual(1)
    expect(random).toBeLessThanOrEqual(20)

  }
})

test("test rollDice", () => {

})

test("test rollSingelDiceMultipleTimes ", () => {
  let rollSingle = rollSingleDiceMultipleTimes(5, D6)

  expect(Array.isArray(rollSingle)).toBe(true)
  expect(rollSingle).toHaveLength(5)
  rollSingle.forEach(number => {
    expect(typeof number).toBe('number')
    expect(number).toBeLessThanOrEqual(D6.sides)
    expect(number).toBeGreaterThanOrEqual(1)
  })
})

test("test rollMultipleDiceMultipleTimes", () => {
  let rollMultipleDice = rollMultipleDiceMultipleTimes(5, ...dice)

  expect(rollMultipleDice).toBeTruthy()
  expect(Array.isArray(rollMultipleDice)).toBe(true)
  rollMultipleDice.forEach(numbers => {
    expect(numbers).toBeTruthy()
    expect(Array.isArray(numbers)).toBe(true)
    numbers.forEach(number => {
      expect(typeof number).toBe('number')
    })
  })
})

test("test rollMultipleAndSum", () => {
   let summed = rollMultipleAndSum(...dice)
   let rolledValues = summed.rollValues
   let sumOfRolls = rolledValues.reduce((prev, curr) => prev + curr)
   let sum = summed.sum
   expect(summed instanceof SummedRoll).toBe(true)
   expect(Array.isArray(rolledValues)).toBe(true)
   expect(rolledValues).toHaveLength(3)
   expect(typeof sum).toBe("number")
   expect(sum).toEqual(sumOfRolls)
   rolledValues.forEach(number => {
    expect(typeof number).toBe("number")
   })
})
