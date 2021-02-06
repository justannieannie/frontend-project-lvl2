import _ from 'lodash';
import path from 'path';
import fs from 'fs';

const genDiff = (filepath1, filepath2) => {
  const normalPath1 = path.resolve(process.cwd(), filepath1);
  const normalPath2 = path.resolve(process.cwd(), filepath2);
  const obj1 = JSON.parse(fs.readFileSync(normalPath1));
  const obj2 = JSON.parse(fs.readFileSync(normalPath2));
  const getDiff = (key) => {
   if (!_.has(obj1, key)) {
     return `- ${key}: ${obj2[key]}`;
   }
   if (!_.has(obj2, key)) {
     return `+ ${key}: ${obj1[key]}`;
   }

   if (obj1[key] !== obj2[key]) {
     return `- ${key}: ${obj1[key]}\n+ ${key}: ${obj2[key]}`;
   }
   return `${key}: ${obj1[key]}`;
 };
 const keys = _.sortBy(_.union(Object.keys(obj1), Object.keys(obj2)));
 const result = keys.map(getDiff);
 return `{\n${result.join('\n')}\n}`;

};

export default genDiff;
