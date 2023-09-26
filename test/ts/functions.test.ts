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

import '../../src/ts/model/die'
import { generateRandomNumber } from '../../src/ts/model/functions'

test('test random number function returns >=1 and <=6 100 times', () => {
  let times = 100
  for(let i = 0; i < times; i++) {
    let number = generateRandomNumber(6)
    expect(number).toBeGreaterThanOrEqual(1)
    expect(number).toBeLessThanOrEqual(6)
  }
})

test('test random number function returns >=1 and <=20 100 times', () => {
  let times = 100
  for(let i = 0; i < times; i++) {
    let number = generateRandomNumber(20)
    expect(number).toBeGreaterThanOrEqual(1)
    expect(number).toBeLessThanOrEqual(20)
  }
})