"use strict";
function printCoord(pt) {
    console.log("The coordinate's x is: ", pt.x);
    console.log("The coordinate's y is: ", pt.y);
}
// printCoord({ x: 5, y: 6, z: 7 });
function printName(name) {
    console.log(name.lastname?.toUpperCase());
}
printName({ firstname: "ali" });
printName({ firstname: "ahmad", lastname: "ahmadi" });
