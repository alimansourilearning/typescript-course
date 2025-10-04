type Point = { x: number; y: number };

function showCoordinate(pt: Point) {
  console.log("The coordinate's x is:", pt.x);
  console.log("The coordinate's y is:", pt.y);
}

type Id = string | number;
function showId(id: Id) {
  console.log("Your id is:", id);
}

type UserName = string;

function handleName(name: string): UserName {
  return name;
}

type Animal = { name: string };
type Bear = Animal & { honey: boolean };

const bear: Bear = { name: "Winnie", honey: true };
