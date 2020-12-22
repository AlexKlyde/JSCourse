const splitString = (str, len = 10) => {
  if (typeof str !== 'string') {
    return null;
  }

  const chunks = [];

  while (str) {
    if (str.length < len) {
      chunks.push(str + ".".repeat(len - str.length));
      break;
    }

    chunks.push(str.substr(0, len));
    str = str.substr(len);
  }

  return chunks;
};

console.log(splitString('abcd efghsd', 7));
