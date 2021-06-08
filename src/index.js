import _ from 'lodash';
import generateObj from './parsers/parsers.js';
import makeDiff from './treeBuilder.js';
import stylish from './stylish.js';

const genDiff = (filepath1, filepath2) => {
  const obj1 = generateObj(filepath1);
  const obj2 = generateObj(filepath2);
  const diff = makeDiff(obj1, obj2);
  return stylish(diff);
};

export default genDiff;
