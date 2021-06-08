import _ from 'lodash';

const stylish = (data, replacer = ' ', spacesCount = 2) => {
  const prefixes = ['  ', '+ ', '- '];
  const iter = (currentValue, depth) => {
    if (!_.isObject(currentValue)) {
      return `${currentValue}`;
    }
    const indentSize = depth * spacesCount;
    const currentIndent = replacer.repeat(indentSize);
    const bracketIndent = replacer.repeat(indentSize - spacesCount);
    const result = Object
      .entries(currentValue)
      .map(([key, value]) => `${currentIndent}${prefixes.includes(key.slice(0, 2))
        ? key : `  ${key}`}: ${iter(value, depth + 2)}`);

    return [
      '{',
      ...result,
      `${bracketIndent}}`,
    ].join('\n');
  };

  return iter(data, 1);
};

export default stylish;
