import _ from 'lodash';

const stringify = (value) => {
  if (_.isObject(value)) {
    return '[complex value]';
  }

  return typeof value === 'string' ? `'${value}'` : value;
};

const plain = (tree) => {
  const iter = (data, path) => data.flatMap((node) => {
    const {
      key, type, value, children, oldValue, newValue,
    } = node;
    const normalPath = [...path, key];
    switch (type) {
      case 'nested':
        return iter(children, normalPath);
      case 'added':
        return `Property '${normalPath.join('.')}' was added with value: ${stringify(value)}\n`;
      case 'removed':
        return `Property '${normalPath.join('.')}' was removed\n`;
      case 'changed':
        return `Property '${normalPath.join('.')}' was updated. From ${stringify(oldValue)} to ${stringify(newValue)}\n`;
      default:
        return;
    }
    return;
  });
  const result = iter(tree, []);
  return result.join('');
};

export default plain;
