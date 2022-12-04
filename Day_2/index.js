'use strict';
import { readFileSync } from 'fs';

const values = {
  A: 1,
  B: 2,
  C: 3,
  X: 1,
  Y: 2,
  Z: 3,
};

function readFile(fileName) {
  const response = readFileSync(fileName, 'utf8');

  const splitResponse = response.split('\n').map((a) => a.split(' '));
  return calculateResult(splitResponse);
}

function calculateResult(splitResponse) {
  let result = 0;
  splitResponse.forEach((element) => {
    const me = element[1];
    const oponent = element[0];
    result += values[me];
    if (values[me] === 1 && values[oponent] === 3) {
      result += 6;
    } else if (values[me] === 2 && values[oponent] === 1) {
      result += 6;
    } else if (values[me] === 3 && values[oponent] === 2) {
      result += 6;
    } else if (values[me] === values[oponent]) {
      result += 3;
    } else {
      result += 0;
    }

    if (values[oponent] === 1) {
      result += values[me];
      if (values[me] === 1) {
        result += 0;
      } else if (values[me] === 2) {
        result += 3;
      } else {
        result += 6;
      }
    } else if (values[oponent] === 2) {
      result += values[me];
      if (values[me] === 1) {
        result += 0;
      } else if (values[me] === 2) {
        result += 3;
      } else {
        result += 6;
      }
    } else {
      result += values[me];
      if (values[me] === 1) {
        result += 0;
      } else if (values[me] === 2) {
        result += 3;
      } else {
        result += 6;
      }
    }
  });

  return result;
}

const ans = readFile('input.txt');
console.log('ans', ans);
