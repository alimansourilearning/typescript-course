let state: "pending" = "pending";
// state = "done";

type UserRole = "admin" | "editor" | "viewer";

function checkPermission(userRole: UserRole) {
  console.log("user role is:", userRole);
}

checkPermission("admin");
checkPermission("viewer");
// checkPermission("guest")

const myStatus = "success";
let firstname = "ali";

function handleFullname(firstname: "mohammad" | "ali", lastname: string) {
  return firstname + lastname;
}

const someoneName = { firstname: "ali", lastname: "mansouri" };

handleFullname(someoneName.firstname, someoneName.lastname);
