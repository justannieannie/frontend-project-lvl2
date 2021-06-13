import path from 'path';
import fs from 'fs';
import parse from './parsers.js';
import makeDiff from './treeBuilder.js';
import format from './formatters/index.js';

const normalPath = (filepath) => path.resolve(filepath);
const getFormat = (filepath) => path.extname(filepath);

const genDiff = (filepath1, filepath2, formatName = 'stylish') => {
  const file1 = fs.readFileSync(normalPath(filepath1), 'utf-8');
  const file2 = fs.readFileSync(normalPath(filepath2), 'utf-8');

  const obj1 = parse(file1, getFormat(filepath1));
  const obj2 = parse(file2, getFormat(filepath2));
  
  const diff = makeDiff(obj1, obj2);
  return format(diff, formatName);
};

export default genDiff;
