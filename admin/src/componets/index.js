import Signin from "./Auth/Signin";
import Dashboard from "./sidebarcomponents/dashboard/Dashboard";
import Profile from "./sidebarcomponents/usesrs/profile/Profile";
import AddNewUsers from "./sidebarcomponents/usesrs/add_new/AddNew";
import AllUsers from "./sidebarcomponents/usesrs/all_users/AllUsers";
import Protected from "./HOC/privateRoute";

export {
    Protected,
    Dashboard,
    Signin,
    Profile,
    AddNewUsers,
    AllUsers
}