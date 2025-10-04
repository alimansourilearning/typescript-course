interface NewPoint {
  x: number;
  y: number;
}

function showNewCoordinate(pt: NewPoint) {
  console.log("The coordinate's x is:", pt.x);
  console.log("The coordinate's y is:", pt.y);
}
