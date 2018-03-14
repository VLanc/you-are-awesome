// DO WHATEVER YOU WANT HERE

const createEnumerableProperty = (propertyName) => {
  return propertyName;
};

const createNotEnumerableProperty = (propertyName) => {
  Object.defineProperty(Object.prototype, propertyName, {
    get: () => propertyName,
    set: (value) => {propertyName = value},
    enumerable: false 
  });
  
  return propertyName;
};

const createProtoMagicObject = () => {
  return Function;
};

let counter = 0;
const incrementor = () => {
  counter++;
  incrementor.valueOf = () => counter;
  return incrementor;
};

let asyncCounter = 0;
const asyncIncrementor = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      asyncCounter++;
      resolve(asyncCounter);
    });
  });
};

const createIncrementer = () => {
  let generator = function* createGenerator() {
    yield 1;
    yield 2;
    return 3;
  }

  return generator();
};

// return same argument not earlier than in one second, and not later, than in two
const returnBackInSecond = (param) => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(param);
    }, 1001);
  });
};

const getDeepPropertiesCount = (obj) => {
  let counter = 0;
  let str = JSON.stringify(obj);

  for (let i = 0; i < str.length; i++) {
    if (!isNaN(str[i])) {
      for (let j = i + 1; j < str.length; j++) {
        if (isNaN(str[j])) {
          counter++;
          i = j;
          break;
        }
      }
    }
  }

  return counter;
};

const createSerializedObject = () => {
  return null;
};

const toBuffer = () => {};

const sortByProto = (arr) => arr.sort();

exports.createEnumerableProperty = createEnumerableProperty;
exports.createNotEnumerableProperty = createNotEnumerableProperty;
exports.createProtoMagicObject = createProtoMagicObject;
exports.incrementor = incrementor;
exports.asyncIncrementor = asyncIncrementor;
exports.createIncrementer = createIncrementer;
exports.returnBackInSecond = returnBackInSecond;
exports.getDeepPropertiesCount = getDeepPropertiesCount;
exports.createSerializedObject = createSerializedObject;
exports.sortByProto = sortByProto;