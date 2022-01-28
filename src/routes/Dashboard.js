import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <div>
      <header
        className="shadow d-flex align-items-center justify-content-center"
        style={{ height: "50px" }}
      >
        Crud App
      </header>
      <div className="d-flex align-items-center justify-content-center gap-4 mt-4">
        <Link to="/users">
          <Button>Users</Button>
        </Link>
        <Link to="/create-user">
          <Button>Create user</Button>
        </Link>
      </div>
    </div>
  );
}

export default Dashboard;
