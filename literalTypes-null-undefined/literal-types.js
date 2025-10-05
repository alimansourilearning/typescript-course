"use strict";
let state = "pending";
function checkPermission(userRole) {
    console.log("user role is:", userRole);
}
checkPermission("admin");
checkPermission("viewer");
// checkPermission("guest")
const myStatus = "success";
let firstname = "ali";
function handleFullname(firstname, lastname) {
    return firstname + lastname;
}
const someoneName = { firstname: "ali", lastname: "mansouri" };
handleFullname(someoneName.firstname, someoneName.lastname);
