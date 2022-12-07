const fs = require("fs");
const { off } = require("process");
const constraint = 110;
//175328
//179615
//181918
//156800
//103544
//88203
//71875
//69082
//99821
//105084
//88808
//83545
//90938
//72824
//180591
//112438
//108395
//107175

const gifts = fs.readFileSync("./gaver.txt", "utf-8").split(/\r\n/);

function getTuple(w, h, l) {
  let smallest = Math.min(w, h, l);
  let middle = w + h + l - Math.min(w, h, l) - Math.max(w, h, l);
  let longest = Math.max(w, h, l);
  return {
    smallest,
    middle,
    longest,
  };
}

const calculate_wrap_length4 = (w,h,l) => {
  let {smallest, middle, longest} = getTuple(w,h,l);
  
  if(longest === 110) {
    console.log(w,h,l)
  }
  if(smallest === 0) {
    return 0;
    if(longest > 110) {
      return longest;
    }
    return middle;
  }

  if(longest < constraint) {
    if(longest >= 55 || (smallest + longest) >= 55) {
      return 2*smallest+2*middle;
    } else {
      return middle+smallest;
    }
  } else {
    return longest + smallest;
  }
}

let length = 0;
gifts.forEach((g) => {
  let split = g.split(",");
  let calcLength = calculate_wrap_length4(
    parseInt(split[0]),
    parseInt(split[1]),
    parseInt(split[2])
  );
  // console.log(split + " - " + calcLength)
  length += calcLength;
});

console.log(calculate_wrap_length4(20,22,90));
console.log(length)

module.exports = {
  calculate_wrap_length4
};