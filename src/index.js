module.exports = function check(str, bracketsConfig) {
  const pair = [];
  let current  = 0;

  bracketsConfig.forEach((item) => pair.push(item[0] + item[1]));
  console.log(pair);

  while (pair.length > current) {
      if (str.includes(pair[current])) {
          str = str.replace(pair[current], '');
          console.log(str);
          current = 0;
      } else {
        current++;
      }
  }

  return str === '';
};
