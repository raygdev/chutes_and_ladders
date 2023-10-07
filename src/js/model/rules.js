
// The rules file contains rules and validation functions for the game.

const LastSpaceValidator = (space) => {
  // TODO - implement a rule that determines if the space is the last space
  return space.type === 0;
}

const FirstSpaceValidator = (space) => {
  // TODO - implement a rule that determines if a space is the first space
  return space.type === 4;
}

export default {LastSpaceValidator, FirstSpaceValidator}

