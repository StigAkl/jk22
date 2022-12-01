const fs = require('fs');
const exact_match = (term) => Object.keys(dictionary).filter((s) => s.startsWith(term)).length === 1;
const isWord = (w) => dictionary[w] !== undefined;

function nextIndex(i, clm) {
    startIndex = i + 1;
    outputString += dictionary[clm] + " ";
    currentLongestMatch = "";
    charPos = 0;
}

const dictionary_csv = fs.readFileSync('./dictionary.txt', 'utf8').split(/\r?\n/);
const dictionary = {};
let lp_length = 0;

dictionary_csv.forEach(line => {
    const split = line.split(",");
    dictionary[split[0]] = split[1]
    if(split[0].length > lp_length) lp_length = split[0].length
}) 

const wishliststring = fs.readFileSync("./letter.txt", 'utf-8'); 
let outputString = "";
let constructedString = "";
let startIndex = 0;
let currentLongestMatch = ""; 
let currentLongestMatchIndex = 0; 
let charPos = 0;

for(let i = 0; i < wishliststring.length; i++) {
    constructedString = wishliststring.substring(startIndex, i+1); 
    charPos++;
    if(isWord(constructedString)) {
        currentLongestMatch = constructedString;
        currentLongestMatchIndex = i; 
        if(exact_match(constructedString)) nextIndex(i, currentLongestMatch)
    }
    if(charPos >=  lp_length) {
        nextIndex(currentLongestMatchIndex, currentLongestMatch);
        i = currentLongestMatchIndex;
    }
}

console.log(outputString  + "\nAnswer:", outputString.length-1);