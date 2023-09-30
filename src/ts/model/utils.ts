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

import {IDie, ISpace, ISummedRoll} from "./interfaces";

const GenerateRandomNumber = (upperBound : number) : number => {
  // TODO - implement generateRandomNumber as it WILL be used by more than the Die class.
  return Math.floor(Math.random() * upperBound) + 1
}

/**
 *
 * @param dice the dice to roll
 * @return number[] each dice that was rolled once.
 */
const RollDice = (dice : Array<IDie>) : Array<number> => {
  // TODO - Implement rolling one or more dice once and only once.
  return dice.map(die => die.roll())
}


const RollSingleDiceMultipleTimes = (count: number, die: IDie) : Array<number> => {
  // TODO - Implement rolling a single dice multiple times
  return [...new Array(count)].map(() => die.roll())
}



/**
 *
 * @param totalRolls the total number of times to roll
 * @param dice one or more dice
 * @return number[][] an array of values
 */
const RollMultipleDiceMultipleTimes = (totalRolls : number, ...dice : Array<IDie>) : Array<Array<number>> => {
  // TODO - Implement rolling multiple dice multiple times
  return dice.map(die => [...new Array(totalRolls)].map(() => die.roll()))
}

/**
 *
 * @param count number of roles
 * @param die single dice
 */
const RollSingleDiceMultipleTimesAndSum = (count: number, die: IDie) : ISummedRoll => {
  // TODO - Implement rolling a single dice multiple times
  let summedRoll = RollSingleDiceMultipleTimes(count, die)
  return {
    rolledValues: summedRoll,
    sum: summedRoll.reduce((prev, curr) => prev + curr)
  } as ISummedRoll
}

/**
 *
 * @param dice
 * @return SummedRoll
 */
const RollMultipleDiceAndSum = (dice: Array<IDie>) : ISummedRoll => {
  // TODO implement rolling multiple dice one time and summing their values
  const rolledDice = RollDice(dice)
  return {
    rolledValues: rolledDice,
    sum: rolledDice.reduce((prev, curr) => prev + curr)
  } as ISummedRoll
}


export default { GenerateRandomNumber, RollDice, RollSingleDiceMultipleTimes,  RollSingleDiceMultipleTimesAndSum, RollMultipleDiceMultipleTimes, RollMultipleDiceAndSum }
