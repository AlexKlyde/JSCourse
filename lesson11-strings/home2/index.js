// input: string, string
// output: number or null

const string = "1232sdfdfdf123dfdf";

const countOccurrences = (str, find) => !find ? null :
  str.split(find).length - 1;

console.log(countOccurrences(string, 'df'));