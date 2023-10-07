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
import utils from "./utils";

export class SummedRoll implements ISummedRoll {
  private Sum: number;
  constructor(private rolls: number[]){
    this.Sum = rolls.reduce((prev, curr) => prev + curr);
  }

  get rolledValues(): number[] {
    return [...this.rolls];
  }
  get sum(): number {
    return this.Sum
  }
}

export const MINIMUM_SIDES = 4;

export class Die implements IDie {
  Sides : number = 0;

  constructor(Sides: number) {
    this.Sides = Sides;
  }

  roll(): number {
    return utils.GenerateRandomNumber(this.sides);
  }

  get sides(): number {
    return this.Sides;
  }

}
