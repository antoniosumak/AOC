'use strict';
import { readFileSync } from 'fs';

function readFile(fileName) {
  const response = readFileSync(fileName, 'utf8');

  const splitResponse = response.split('\n');
  return calculateResult(splitResponse);
}

function calculateResult(array) {
  return array
    .flatMap((s) =>
      [...new Set(s.slice(0, s.length / 2))].filter((e) =>
        s.slice(s.length / 2).includes(e)
      )
    )
    .map((letter) => letter.charCodeAt())
    .map((code) => (code > 96 ? code - 96 : code - 38))
    .reduce((a, b) => a + b, 0);
}

const ans = readFile('input.txt');
console.log(ans);
