import _ from 'lodash';

const stringify = (value, space) => {
  if (!_.isObject(value)) {
    return value;
  }
  const indent = ' '.repeat(space + 6);
  const bracketIndent = ' '.repeat(space + 2);
  const result = Object.entries(value).map(([key, val]) => {
    if (_.isObject(val)) {
      return `${indent}${key}: ${stringify(val, space + 4)}\n`;
    }
    return `${indent}${key}: ${val}\n`;
  });
  return `{\n${result.join('')}${bracketIndent}}`;
};

const stylish = (tree) => {
  const iter = (data, space = 2) => data.flatMap((node) => {
    const indent = ' '.repeat(space);
    const bracketIndent = ' '.repeat(space + 2);
    const {
      key, type, value, children, oldValue, newValue,
    } = node;

    switch (type) {
      case 'nested':
        return `\n${bracketIndent}${key}: {${iter(children, space + 4).join('')}\n${bracketIndent}}`;
      case 'unchanged':
        return `\n${bracketIndent}${key}: ${stringify(value, space)}`;
      case 'changed':
        return `\n${indent}- ${key}: ${stringify(oldValue, space)}\n${indent}+ ${key}: ${stringify(newValue, space)}`;
      case 'added':
        return `\n${indent}+ ${key}: ${stringify(value, space)}`;
      case 'removed':
        return `\n${indent}- ${key}: ${stringify(value, space)}`;
      default:
       throw new Error(`Unknown condition ${type}`);
    }
  });
  const result = iter(tree);
  return `{${result.join('')}\n}`;
};

export default stylish;
