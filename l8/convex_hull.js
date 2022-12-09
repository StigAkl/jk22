const points = [];
const goodstuff = [];

/*
[
  [3408,221207],
  [9484, 81429],
  [21982,54788],
  [46195, 17788],
  [850867, 703],
  [915294, 1424],
  [996680, 52685],
  [998916, 796202],
  [993864, 935064],
  [945272, 998092],
  [871584, 999857]
  [697246, 999701],
  [16269, 999016],
  [4039, 977397]		
  ]
  */
let left;
let leftMost;
let currentVertex; 
let index = 0;
let nextVertex;
let nextIndex = -1;

function setup() {
  createCanvas(900, 900);
  for(let i = 0; i < 100; i++) {
    points.push(createVector(20+random(width/1.2), 20 + random(height/1.2)));
  }
  
  points.sort((a,b) => a.x - b.x);
  leftMost = points[0];
  currentVertex = leftMost;
  nextVertex = points[1];
  index=2;
  goodstuff.push(leftMost);
  
}

function draw() {
  background(0);
  
  strokeWeight(2);
  stroke(255);
  
  for(let i = 0; i < points.length; i++) {
    point(points[i].x, points[i].y)    
  }

  beginShape();
  fill(0, 0, 0, 0)
  for(let p of goodstuff) {
    vertex(p.x, p.y);
  }
  endShape();
  
  stroke(0,0, 255);
  strokeWeight(8);
  point(leftMost);
  
  strokeWeight(1);
  stroke(0,255,0)
  line(currentVertex.x, currentVertex.y, nextVertex.x, nextVertex.y);
  
  let currentCheckingPoint = points[index];
  
  const a = p5.Vector.sub(nextVertex, currentVertex);
  const b = p5.Vector.sub(currentCheckingPoint, currentVertex);
  const crossProduct = a.cross(b);
  
  if(crossProduct.z < 0) {
    nextVertex = currentCheckingPoint;
    nextIndex = index;
  }
    
    index = index+1;
  
  if(index == points.length) {
    if(nextVertex == leftMost) {
      noLoop();
      stroke(255)
      strokeWeight(2);
      line(currentVertex.x, currentVertex.y, leftMost.x, leftMost.y);
    } else {
      stroke(255)
      goodstuff.push(nextVertex);
      currentVertex = nextVertex;
      index = 0;
      nextVertex = leftMost; 
    }
  }
  stroke(255);
  line(currentVertex.x, currentVertex.y, currentCheckingPoint.x, currentCheckingPoint.y);
}
