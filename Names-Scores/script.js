/**
 * namesScores(test1) should return 791.
 * namesScores(test2) should return 1468.
 * namesScores(names) should return 871198282.
 */

const Alphabets = {
  A: 1,
  B: 2,
  C: 3,
  D: 4,
  E: 5,
  F: 6,
  G: 7,
  H: 8,
  I: 9,
  J: 10,
  K: 11,
  L: 12,
  M: 13,
  N: 14,
  O: 15,
  P: 16,
  Q: 17,
  R: 18,
  S: 19,
  T: 20,
  U: 21,
  V: 22,
  W: 23,
  X: 24,
  Y: 25,
  Z: 26,
};

function namesScores(arr) {
  const arrayOrdered = arr.sort((a, b) => {
    if (a > b) return 1;
    if (a < b) return -1;
  });

  const scores = [];

  const worth = (word) => {
    const splittedAndSorted = word.split('');
    const value = splittedAndSorted.reduce((p, c) => p + Alphabets[c], 0);
    return value;
  };

  for (let index = 0; index < arrayOrdered.length; index++) {
    const element = arrayOrdered[index];
    scores.push({ word: element, worth: worth(element) * (index + 1) });
  }

  return scores.reduce((a, b) => a + b.worth, 0);
}

// Only change code above this line
const test1 = ['THIS', 'IS', 'ONLY', 'A', 'TEST'];
const test2 = ['I', 'REPEAT', 'THIS', 'IS', 'ONLY', 'A', 'TEST'];

console.log(namesScores(test2));
