function getTuple(w,h,l) {
  let smallest = Math.min(w, h, l); 
  let middle = w+h+l - Math.min(w, h, l) - Math.max(w, h, l);
  let largest = Math.max(w,h,l);
  return {
    smallest,
    middle,
    largest
  }
}

module.exports = {
  getTuple
}