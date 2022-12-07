const fs = require("fs");
let actionsFile= fs.readFileSync("./actions.txt", "utf-8").split(/\r?\n/); 
let votes = fs.readFileSync("./stemmer.txt", "utf-8").split(/\r?\n/);
let votesDictionary = {};
let actionDictionary = {};

for(action of actionsFile) { 
  let split = action.split(":");
  actionDictionary[split[0]] = parseFloat(split[1]);
}

const getActions = (vote) => {
  let actions = [];
  let actionsSplit = vote.split(",");
  
  for(action of actionsSplit) {
    if(action.includes(":")) {
      actions.push(action.split(":")[0])
    } else {
      actions.push(action);
    }
  }
  return actions;
}

const getScoreFromActions = (actions) => {
  let highestScore= 1;
  for(action of actions) {
    if(actionDictionary[action] < highestScore) 
      highestScore = actionDictionary[action];
  }
  return highestScore;
}

for(vote of votes){
  let nominee = vote.split(":")[1];
  let actions  = getActions(vote);
  let score = getScoreFromActions(actions);
  votesDictionary[nominee] === undefined ? votesDictionary[nominee] = score : votesDictionary[nominee] += score;
}

let sortable = [];

for(let i in votesDictionary) {
  sortable.push(votesDictionary[i])
}

let sorted = sortable.sort((a,b) => b > a ? 1 : -1);
let result = sorted[0]-sorted[1]
console.log(result + " ~ " + Math.round(result))