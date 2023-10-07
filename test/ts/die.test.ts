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

import {Die, SummedRoll} from '../../src/ts/model/die'
import { ISummedRoll } from '../../src/ts/model/interfaces';
import utils from '../../src/ts/model/utils';


let die: Die;
let times6: number[];

beforeEach(() => {
  die = new Die(6)
  times6 = utils.RollSingleDiceMultipleTimes(6,die)
})

test('Test die can be called with >=1 and <=6 100 times', () => {
  let times = 100
  for(let i = 0; i < times; i++){
    let roll = die.roll()
    expect(roll).toBeTruthy()
    expect(typeof roll).toEqual("number")
  }
})

test("rollMultiple is an array", () => {
  expect(Array.isArray(times6)).toBe(true)
  expect(times6).toHaveLength(6)
  times6.forEach(number => {
    expect(typeof number).toBe('number')
  })
})

test("die returns number of sides", () => {
  let sides = die.sides
  expect(typeof sides).toBe("number")
  expect(sides).toEqual(6)
})

test("rollMultipleAndSum returns an instance of SummedRoll", () => {
  let summed: ISummedRoll = utils.RollSingleDiceMultipleTimesAndSum(6, die)
  expect(summed).toBeTruthy()
  expect(summed.rolledValues).toHaveLength(6)
})

test("SummedRoll returns roll values and sum", () => {
  let summed = new SummedRoll([1,3,5])
  expect(summed).toBeInstanceOf(SummedRoll)
  expect(Array.isArray(summed.rolledValues)).toBe(true)
  expect(typeof summed.sum).toBe('number')
  expect(summed.sum).toBe(9)
  expect(summed.rolledValues).toHaveLength(3)
})

test('paint board', () => {
  let total = 100;
  for (let i : number = 10; i >= 1; i--) {
    let row : number[] = []
    for (let j : number = 1; j<=10; j++) {
      row.push(total--);
    }
    row = (i%2==0) ? row : row.reverse()
    console.log(row);
  }
})
