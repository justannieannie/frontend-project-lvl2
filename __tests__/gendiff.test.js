import { test, expect } from '@jest/globals';
import path from 'path';
import fs from 'fs';
import genDiff from '../src/index.js';

const normalPath = (filepath) => path.resolve(filepath);
const readFile = (file) => fs.readFileSync(normalPath(file), 'utf-8');

const resultOfstylish = readFile('__fixtures__/resultOfstylish.txt');
const resultOfplain = readFile('__fixtures__/resultOfplain.txt');
const resultOfjson = readFile('__fixtures__/resultOfjson.txt');
const normalJson1 = normalPath('__fixtures__/file1.json');
const normalJson2 = normalPath('__fixtures__/file2.json');
const normalYml1 = normalPath('__fixtures__/file1.yml');
const normalYml2 = normalPath('__fixtures__/file2.yml');

test('genDiffstylish', () => {
  expect(genDiff(normalJson1, normalJson2)).toEqual(resultOfstylish);
  expect(genDiff(normalYml1, normalYml2)).toEqual(resultOfstylish);
});
test('genDiffplain', () => {
  expect(genDiff(normalJson1, normalJson2, 'plain')).toEqual(resultOfplain);
  expect(genDiff(normalJson1, normalJson2, 'plain')).toEqual(resultOfplain);
});
test('genDiffjson', () => {
  expect(genDiff(normalJson1, normalJson2, 'json')).toEqual(resultOfjson);
  expect(genDiff(normalJson1, normalJson2, 'json')).toEqual(resultOfjson);
});
