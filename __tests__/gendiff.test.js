import { test, expect } from '@jest/globals';
import fs from 'fs';
import path from 'path';
import genDiff from '../index.js';

const getFixturePath = (file) => path.join('__fixtures__', file);
const readFile = (file) => fs.readFileSync(file, 'utf-8');
const resultStylish = readFile(getFixturePath('result_stylish.txt'));
const resultPlain = readFile(getFixturePath('result_plain.txt'));
const resultJson = readFile(getFixturePath('result_json.txt'));
const json1 = getFixturePath('file1.json');
const json2 = getFixturePath('file2.json');
const yml1 = getFixturePath('file1.yml');
const yml2 = getFixturePath('file2.yml');

test('genDiffstylish', () => {
  expect(genDiff(json1, json2)).toEqual(resultStylish);
  expect(genDiff(yml1, yml2)).toEqual(resultStylish);
});
test('genDiffplain', () => {
  expect(genDiff(json1, json2, 'plain')).toEqual(resultPlain);
  expect(genDiff(yml1, yml2, 'plain')).toEqual(resultPlain);
});
test('genDiffjson', () => {
  expect(genDiff(json1, json2, 'json')).toEqual(resultJson);
  expect(genDiff(yml1, yml2, 'json')).toEqual(resultJson);
});
