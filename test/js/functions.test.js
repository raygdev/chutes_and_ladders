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

let timesToCall;
beforeEach(() => {
  timesToCall = 100
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