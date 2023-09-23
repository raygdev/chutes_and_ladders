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

import '../../src/js/model/functions'
import { generateRandomNumber } from '../../src/js/model/functions'

test('Generates a random number between 1 and 6', () => {
  let random1 = generateRandomNumber(6)
  let random2 = generateRandomNumber(6)
  let random3 = generateRandomNumber(6)
  expect(random1).toBeGreaterThanOrEqual(1)
  expect(random1).toBeLessThanOrEqual(6)
  expect(random2).toBeGreaterThanOrEqual(1)
  expect(random2).toBeLessThanOrEqual(6)
  expect(random3).toBeGreaterThanOrEqual(1)
  expect(random3).toBeLessThanOrEqual(6)
  
})
test('Generates a random number between 1 and 20', () => {
  let random1 = generateRandomNumber(20)
  let random2 = generateRandomNumber(20)
  let random3 = generateRandomNumber(20)
  expect(random1).toBeGreaterThanOrEqual(1)
  expect(random1).toBeLessThanOrEqual(20)
  expect(random2).toBeGreaterThanOrEqual(1)
  expect(random2).toBeLessThanOrEqual(20)
  expect(random3).toBeGreaterThanOrEqual(1)
  expect(random3).toBeLessThanOrEqual(20)
  
})