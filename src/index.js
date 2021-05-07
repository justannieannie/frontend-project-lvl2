import _ from 'lodash';
import generateObj from './parsers/parsers.js';

const genDiff = (filepath1, filepath2) => {
  const obj1 = generateObj(filepath1);
  const obj2 = generateObj(filepath2);
  const getDiff = (key) => {
    if (!_.has(obj1, key)) {
      return `- ${key}: ${obj2[key]}`;
    }
    if (!_.has(obj2, key)) {
      return `+ ${key}: ${obj1[key]}`;
    }
    if (obj1[key] !== obj2[key]) {
      return `- ${key}: ${obj2[key]}\n+ ${key}: ${obj1[key]}`;
    }
    return `${key}: ${obj1[key]}`;
  };
  const keys = _.sortBy(_.union(Object.keys(obj1), Object.keys(obj2)));
  const result = keys.map(getDiff);
  return `{\n${result.join('\n')}\n}`;
};

export default genDiff;
