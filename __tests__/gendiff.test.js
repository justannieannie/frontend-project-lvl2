import { test, expect } from '@jest/globals';
import genDiff from '../src/index';
import result from '../__fixtures__/result';

test('genDiff', () => {
  expect(genDiff('__fixtures__/file1.json', '__fixtures__/file2.json')).toEqual(result);
});
