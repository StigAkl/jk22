const generateDeck = (n) => {
  let deck = [];
  for(let i = 1; i <=n; i++) {
      deck.push(i);
  }
  return deck;
}
const perfectShuffle = (arr) => {
  let middle = arr.length/2;
  let first= arr.splice(0,middle);
  let second = arr;
  let perfectShuffled = [];
  for(let i = 0; i < first.length; i++) {
      perfectShuffled.push(first[i])
      perfectShuffled.push(second[i])
  }
  return perfectShuffled;
}
const isOriginal = (shuffled, original) => {
  for(let i = 0; i < shuffled.length; i++) {
      if(shuffled[i] !== original[i]) return false;
  }
  return true;
}

const returnShuffleCount = (arr, orig) => {
  let isEqual = false;
  let num = 0;
  while(!isEqual) {
    num++;
    arr = perfectShuffle(arr);
    if(isOriginal(arr, orig)) {
        isEqual = true;
    }
  }

  return num;
}

let i = 50; 
let found = false;
let deck = generateDeck(i)
let original = generateDeck(i);

while(!found) {
  deck.push(deck[deck.length-1]+1);
  deck.push(deck[deck.length-1]+1);
  original.push(original[original.length-1]+1);
  original.push(original[original.length-1]+1);
  let shuffleCount = returnShuffleCount(deck.slice(), original);
  if(shuffleCount === 13) { found = true}
}

console.log(deck.length);

