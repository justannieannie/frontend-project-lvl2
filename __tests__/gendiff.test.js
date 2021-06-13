import { test, expect } from '@jest/globals';
import fs from 'fs';
import path from 'path';
import genDiff from '../index.js';

const getFixturePath = (file) => path.join('__fixtures__', file);
const readFile = (file) => fs.readFileSync(file, 'utf-8');
const result_stylish = readFile(getFixturePath('result_stylish.txt'));
const result_plain = readFile(getFixturePath('result_plain.txt'));
const result_json = readFile(getFixturePath('result_json.txt'));
const json1 = getFixturePath('file1.json');
const json2 = getFixturePath('file2.json');
const yml1 = getFixturePath('file1.yml');
const yml2 = getFixturePath('file2.yml');

test('genDiffstylish', () => {
  expect(genDiff(json1, json2)).toEqual(result_stylish);
  expect(genDiff(yml1, yml2)).toEqual(result_stylish);
});
test('genDiffplain', () => {
  expect(genDiff(json1, json2, 'plain')).toEqual(result_plain);
  expect(genDiff(yml1, yml2, 'plain')).toEqual(result_plain);
});
test('genDiffjson', () => {
  expect(genDiff(json1, json2, 'json')).toEqual(result_json);
  expect(genDiff(yml1, yml2, 'json')).toEqual(result_json);
});
