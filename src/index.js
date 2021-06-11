import generateObj from './parsers.js';
import makeDiff from './treeBuilder.js';
import format from './formatters/index.js';

const genDiff = (filepath1, filepath2, formatName = 'stylish') => {
  const obj1 = generateObj(filepath1);
  const obj2 = generateObj(filepath2);
  const diff = makeDiff(obj1, obj2);
  return format(diff, formatName);
};

export default genDiff;
