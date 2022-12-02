const fs = require("fs");

interface Gift {
  tullegave: boolean;
  name: string;
}

const giftsFile = fs.readFileSync("./gaver.txt", "utf-8").split("\r\n");

const gifts = giftsFile.map((g: string): Gift => {
  return {
    name: g,
    tullegave: g.includes("alv")
  }
})


let genericVerseStart = "På den {day} alvedagen sendte nissemor til meg"; 
let song = ""; 
let songGifts = [];

for(let i = 0; i < gifts.length; i++) {
  song += genericVerseStart.replace("{day}", i.toString()) + "\n";

  song += gifts[i].name; 

  if(songGifts.length > 3) {
  for(let j = songGifts.length -1;  j > 0; j--) {
    if(j <= 2) {
      song += " og " + songGifts[j]; 
    } else {
      song += "\n" + songGifts[j];
    }
  }
}

  if(!gifts[i].tullegave) songGifts.push(gifts[i].name);

  song += "\n";
}

console.log(song);