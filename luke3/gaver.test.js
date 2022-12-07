const calc = require("./main");
const fs = require("fs");

test('Test that functions are not broken', () => {
  const gifts = fs.readFileSync("./gaver-test.txt", "utf-8").split(/\r\n/);
  let answers = [50,120,45,185,74,200,80,80,120,3,2,11];

  let i = 0;
  gifts.forEach((g) => {
    let split = g.split(",");
    let calcLength = calc.calculate_wrap_length4(
      parseInt(split[0]),
      parseInt(split[1]),
      parseInt(split[2])
    );

    console.log(calcLength, answers[i])
    expect(calcLength).toBe(answers[i])
    i++;
  })
});