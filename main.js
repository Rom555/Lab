'use strict';

const arr = [1, 20, 200, 40, 38, 213, 93, 432, 20, 1, 12, 20, 20, 20, 20];

const serialize = (array) => {
  let str = '';
  const json = {};

  array.forEach((element) => {
    if (!json[element]) json[element] = 1;
    else json[element]++;
  });

  for (let key in json) {
    if (json[key] > 1) {
      str += key + ':' + json[key];
    } else {
      str += key;
    }

    str += ',';
  }

  str = str.slice(0, -1);

  return str;
};

const deserialize = (string) => {
  let arr = [];

  string.split(',').map((elem) => {
    let [char, amount] = elem.split(':');

    if (amount) {
      for (let i = 0; i < +amount; i++) {
        arr.push(+char);
      }
    } else {
      arr.push(+char);
    }
  });

  return arr;
};

const str = serialize(arr);
console.log(str);
console.log(deserialize(str));
