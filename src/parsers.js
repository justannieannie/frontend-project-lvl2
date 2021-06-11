import yaml from 'js-yaml';
import path from 'path';
import fs from 'fs';

const generateObj = (filepath) => {
  const normalPath = path.resolve(filepath);
  const format = path.extname(normalPath);

  if (format === '.yml' || format === '.yaml') {
    return yaml.load(fs.readFileSync(normalPath, 'utf-8'));
  }
  return JSON.parse(fs.readFileSync(normalPath, 'utf-8'));
};

export default generateObj;
