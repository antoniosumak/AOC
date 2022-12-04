'use strict';

import { readFileSync } from 'fs';

function readFile(fileName) {
  const response = readFileSync(fileName, 'utf8');
  const splitResponse = response.split('\n').map((line) =>
    line
      .trim()
      .split(',')
      .flatMap((item) => item.split('-').flatMap((item) => Number(item)))
  );

  return calculateResult(splitResponse);
}

function calculateResult(array) {
  let sum = 0;

  array.forEach((item) => {
    const [firstRangeFirst, firstRangeLast, secondRangeFirst, secondRangeLast] =
      item;
    if (
      (firstRangeFirst >= secondRangeFirst &&
        firstRangeLast <= secondRangeLast) ||
      (secondRangeFirst >= firstRangeFirst && secondRangeLast <= firstRangeLast)
    ) {
      sum += 1;
    }
  });

  return sum;
}

const ans = readFile('input.txt');
console.log(ans);
