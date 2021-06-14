import yaml from 'js-yaml';

const formatters = {
  '.json': JSON.parse,
  '.yml': yaml.load,
};

const parse = (file, format) => formatters[format](file);


export default parse;
