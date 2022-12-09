const p5 = require('node-p5');

function sketch(p) {
    p.setup = () => {
        p.createCanvas(200, 200);
    }
    p.draw = () => {
        p.background(50);
        p.text('hello world!', 50, 100);
    }
}

p5.createSketch(sketch);
