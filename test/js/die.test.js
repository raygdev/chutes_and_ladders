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

import '../../src/js/model/die'
import { Die } from '../../src/js/model/die'



let die;
let times6;

beforeEach(() => {
  die = new Die(6)
  times6 = die.rollMultiple(6)
})

test('The die has 6 sides', () => {
  let sides = die.sides
  expect(sides).toEqual(6)
})

test('The die rolls a number between 1 and 6', () => {
  let roll1 = die.roll()
  expect(roll1).toBeGreaterThanOrEqual(1)
  expect(roll1).toBeLessThanOrEqual(6)
})

test('rollMultiple should be an array', () => {
  expect(Array.isArray(times6)).toBe(true)
})

test('The die can be rolled multiple times', () => {
  let times7 = die.rollMultiple(7)
  expect(times6).toHaveLength(6)
  expect(times7).toHaveLength(7)
})

test('The rolls should all be numbers', () => {
  times6.forEach(number => {
    expect(typeof number).toBe("number")
  });
})

test('Each roll should be <= 6 or >= 1', () => {
  times6.forEach(number => {
    expect(number).toBeLessThanOrEqual(6)
    expect(number).toBeGreaterThanOrEqual(1)
  })
})


