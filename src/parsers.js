import yaml from 'js-yaml';

const formatters = {
  json: JSON.parse,
  yml: yaml.load,
};

const parse = (data, format) => formatters[format](data);

export default parse;
