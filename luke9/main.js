const fs = require("fs");
const dataRaw = fs.readFileSync("machine.txt", "utf-8");
const data = dataRaw.split(/\r\n/);

const waterRange = {
  min: 400, 
  max: 1500
};

const tempRange = {
  min: 95,
  max: 105
};

const kullsyre = {
  min: 300,
  max: 500
};

const isProducing = (w, t, k) => {
  let isWater = w >= waterRange.min && w<= waterRange.max;
  let isTemp = t >= tempRange.min && t <= tempRange.max;
  let isKullsyre = k >= kullsyre.min && k <= kullsyre.max;

  return isWater && isTemp && isKullsyre;
}

const calc = (w, t, k) => {
  let waterUsed = w-100; 
  let kullsyreUsed = Math.floor(k/10);

  let total = waterUsed + kullsyreUsed
  if(t >= 100) {
    total = total - Math.floor((total/40));
  }
  return total;
}

const extractNumber = (str) => str.match(/\d+/)[0];

let machines = {};

let totalProduced = 0;
for(let d of data) {
  let l = d.split(",");
  let temp = parseInt(extractNumber(l[1]));
  let water = parseInt(extractNumber(l[2]));
  let ks = parseInt(extractNumber(l[3]));
  if(isProducing(water, temp, ks)) {
    let produced = calc(water, temp, ks);
    machines[l[0]] === undefined ? machines[l[0]] = produced : machines[l[0]] += produced;
    totalProduced += produced;
  }
}

let maxNumber = 0;
let maxMachineName = Object.keys(machines)[0];

for(let p in machines) {
  if(machines[p] > maxNumber) {
    maxNumber = machines[p];
    maxMachineName = p;
  }
}

console.log("Total:", totalProduced);
console.log("Best machine:", maxMachineName + " with " + maxNumber + " liters produced");