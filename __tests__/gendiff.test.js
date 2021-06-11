import { test, expect } from '@jest/globals';
import fs from 'fs';
import genDiff from '../index.js';

const readFile = (file) => fs.readFileSync(file, 'utf-8');

const resultOfstylish = readFile('__fixtures__/resultOfstylish.txt');
const resultOfplain = readFile('__fixtures__/resultOfplain.txt');
const resultOfjson = readFile('__fixtures__/resultOfjson.txt');
const json1 = '__fixtures__/file1.json';
const json2 = '__fixtures__/file2.json';
const yml1 = '__fixtures__/file1.yml';
const yml2 = '__fixtures__/file2.yml';

test('genDiffstylish', () => {
  expect(genDiff(json1, json2)).toEqual(resultOfstylish);
  expect(genDiff(yml1, yml2)).toEqual(resultOfstylish);
});
test('genDiffplain', () => {
  expect(genDiff(json1, json2, 'plain')).toEqual(resultOfplain);
  expect(genDiff(yml1, yml2, 'plain')).toEqual(resultOfplain);
});
test('genDiffjson', () => {
  expect(genDiff(json1, json2, 'json')).toEqual(resultOfjson);
  expect(genDiff(yml1, yml2, 'json')).toEqual(resultOfjson);
});
