import _ from 'lodash';

const makeDiff = (obj1, obj2) => {
  const keys = _.sortBy(_.union(Object.keys(obj1), Object.keys(obj2)));
  const result = keys.reduce((acc, key) => {
    if (_.isObject(obj1[key]) && _.isObject(obj2[key]) && obj1[key] !== obj2[key]) {
      return { ...acc, [`  ${key}`]: makeDiff(obj1[key], obj2[key]) };
    }
    if (_.has(obj1, key) && !_.has(obj2, key)) {
      return { ...acc, [`- ${key}`]: obj1[key] };
    }
    if (!_.has(obj1, key) && _.has(obj2, key)) {
      return { ...acc, [`+ ${key}`]: obj2[key] };
    }
    if (_.has(obj1, key) && _.has(obj2, key) && obj1[key] !== obj2[key]) {
      return { ...acc, [`- ${key}`]: obj1[key], [`+ ${key}`]: obj2[key] };
    }
    
    return { ...acc, [`  ${key}`]: obj1[key] };
  }, {});
  return result;
};

export default makeDiff;
