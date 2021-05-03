import genDiff from '../src/index'
import { test, expect } from '@jest/globals';
import result from '../__fixtures__/result';


test('diffOfJson', () => {
    expect(genDiff().toEqual(result));
})