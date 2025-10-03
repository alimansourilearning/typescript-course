type Point = { x: number; y: number };

function showCoordinate(pt: Point) {
  console.log("The coordinate's x is:", pt.x);
  console.log("The coordinate's y is:", pt.y);
}

type Id = string | number;
function showId(id: Id) {
  console.log("Your id is:", id);
}
