const reverse = (str) => {
  let i = 0;
  let result = '';

  while (i < str.lenght) {
    result = result + str [i];
    i = i + 1;
  }
  return result;
}
console.log(reverse(cat));