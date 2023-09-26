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

import { generateRandomNumber } from "./functions";

export class SummedRoll {
  #rolls;
  #summed;
  constructor(rolls) {
    this.#rolls = [...rolls]
    this.#summed = this.#rolls.reduce((prev, curr) => prev + curr)

  }
  // Shoud return an array of numbers
  get rollValues() {
    return[...this.#rolls];
  }
  // Should return a sum of all the roles as a number value
  get sum() {
    return this.#summed;
  }
}

export class Die {
  #numberOfSides;
  constructor(numberOfSides) {
    this.#numberOfSides = numberOfSides
  }
  // Should return a number of sides
  get sides() {
    return this.#numberOfSides;
  }
  // Should return a random number between one and the total sides
  roll() {
    return generateRandomNumber(this.sides);
  }
  // Should return an array of numbers
  rollMultiple(totalRolls) {
    return [...new Array(totalRolls)].map(_ => this.roll());
  }
  // Should return a SummedRoll
  rollMultipleAndSum(totalRolls) {
    return new SummedRoll(this.rollMultiple(totalRolls));
  }

}
