let state: "pending" = "pending";
// state = "done";

type UserRole = "admin" | "editor" | "viewer";

function checkPermission(userRole: UserRole) {
  console.log("user role is:", userRole);
}

checkPermission("admin")
checkPermission("viewer")
checkPermission("guest")