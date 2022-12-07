const isPalindrom = (str) => {
  for(let i = 0; i < str.length; i++) {
    if(str[i] !== str[str.length-1-i]) {
      return false;
    }
  }
  return true;
}

const k = (str) => {
  let t = 0;
  for (let i = 2; i <= 16; i++) {
    t += isPalindrom(str.toString(i)) ? 1 : 0;
    if (t > 2) return true;
  }
  if (t > 2) return false;
};

let sum = 0;
for(let i = 0; i < 10000000; i++) { 
  if(k(i)) sum+= i;
}
console.log(sum)