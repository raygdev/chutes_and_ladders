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

import { IDie, ISummedRoll } from "./interfaces";
import { generateRandomNumber } from "./functions";

export class SummedRoll implements ISummedRoll {
  constructor(private rolls: number[]){}
  rollValues(): number[] {
    return [...this.rolls];
  }
  sum(): number {
    return this.rollValues().reduce((prev, curr) => prev + curr);
  }
}

export class Die implements IDie {
  
  constructor(private numberOfSides: number){}

  get sides(): number {
    return this.numberOfSides;
  }
  roll(): number {
    return generateRandomNumber(this.sides);
  }
  rollMultiple(totalRolls: number): number[] {
    return [...new Array(totalRolls)].map<number>(_ => this.roll())
  }
  rollMultipleAndSum(totalRolls: number): ISummedRoll {
    return new SummedRoll(this.rollMultiple(totalRolls))
  }

}