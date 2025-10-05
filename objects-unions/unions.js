"use strict";
function printId(id) {
    if (typeof id === "string") {
        console.log("Your id is: ", id.toUpperCase());
    }
    else {
        console.log("Your id is: ", id);
    }
}
printId(12334);
printId("dkfjsdjflkdsjfl;djlfsdj;fsd");
// printId({ id: "lksdfjdfjskldkfjlsdjflds" });
function getFirstThree(x) {
    return x.slice(0, 3);
}
