import _ from 'lodash';

const makeDiff = (obj1, obj2) => {
  const keys = _.sortBy(_.union(Object.keys(obj1), Object.keys(obj2)));
  const result = keys.map((key) => {
    if (_.isObject(obj1[key]) && _.isObject(obj2[key]) && obj1[key] !== obj2[key]) {
      return { key, children: makeDiff(obj1[key], obj2[key]), type: 'nested' };
    }
    if (_.has(obj1, key) && !_.has(obj2, key)) {
      return { key, value: obj1[key], type: 'removed' };
    }
    if (!_.has(obj1, key) && _.has(obj2, key)) {
      return { key, value: obj2[key], type: 'added' };
    }
    if (_.has(obj1, key) && _.has(obj2, key) && obj1[key] !== obj2[key]) {
      return {
        key, oldValue: obj1[key], newValue: obj2[key], type: 'changed',
      };
    }

    return { key, value: obj1[key], type: 'unchanged' };
  }, []);

  return result;
};

export default makeDiff;
