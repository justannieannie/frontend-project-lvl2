import stylish from './stylish.js';
import plain from './plain.js';

const format = (tree, name) => {
  switch (name) {
    case 'stylish':
      return stylish(tree);
    case 'plain':
      return plain(tree);
    case 'json':
      return JSON.stringify(tree, null, 2);
    default:
      throw new Error('Unknown format!');
  }
};

export default format;
