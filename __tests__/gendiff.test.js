import { test, expect } from '@jest/globals';
import path from 'path';
import fs from 'fs';
import genDiff from '../src/index';

const result = fs.readFileSync(path.resolve(process.cwd(), '__fixtures__/resultOfnested.txt'), 'utf-8');

test('genDiff', () => {
  expect(genDiff('__fixtures__/nestedFile1.json', '__fixtures__/nestedFile2.json')).toEqual(result);
  expect(genDiff('__fixtures__/nestedFile1.yml', '__fixtures__/nestedFile2.yml')).toEqual(result);
});
