function printCoord(pt: { x: number; y: number }) {
  console.log("The coordinate's x is: ", pt.x);
  console.log("The coordinate's y is: ", pt.y);
}

// printCoord({ x: 5, y: 6, z: 7 });

function printName(name: { firstname: string; lastname?: string }) {
  if (name.lastname !== undefined) {
    console.log(name.lastname.toUpperCase());
  }
}

printName({ firstname: "ali" });
printName({ firstname: "ahmad", lastname: "ahmadi" });
