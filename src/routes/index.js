import { Route, Routes } from "react-router-dom";
import Users from "./Users";
import CreateUser from "./CreateUser";
import Profile from "./Profile";
import Error from "./Error";
import Dashboard from "./Dashboard";
import EditUser from "./EditUser";

function RoutingFramework() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/users" element={<Users />} />
      <Route path="/create-user" element={<CreateUser />} />
      <Route path="/profile/:id" element={<Profile />} />
      <Route path="/edit-users/:id" element={<EditUser />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
}

export default RoutingFramework;
