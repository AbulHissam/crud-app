import React, { useEffect, useState } from "react";
import { Card, Image } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { UsersState } from "../context/Context";

function Profile() {
  const { id } = useParams();

  const {
    state: { users },
  } = UsersState();

  const [user] = useState(users.find((user) => user.id === id));
  const [fetched, setFetched] = useState(false);

  useEffect(() => {
    setFetched(true);
  }, []);

  return (
    <>
      <p className="h1 text-center text-primary border p-2">Profile</p>
      {!fetched && (
        <p className="mt-4 text-primary text-center h3">Loading...</p>
      )}

      {fetched && (
        <Card className="shadow align-items-center p-2 mx-auto mt-5 w-25">
          <Card.Body className="d-flex flex-column align-items-center gap-2">
            <Image
              src={user.avatar}
              alt={`${id}-avatar`}
              roundedCircle
              style={{
                width: "100px",
                height: "100px",
              }}
            ></Image>

            <div style={{ overflow: "hidden", textAlign: "center" }}>
              <Card.Title>{`${user.firstName},${user.lastName}`}</Card.Title>
              <Card.Text>{`Email:${user.email}`}</Card.Text>
              <Card.Text>{`Phone:${user.phoneNumber}`}</Card.Text>
              <Card.Text>{`City:${user.city}`}</Card.Text>
              <Card.Text>{`State:${user.state}`}</Card.Text>
              <Card.Text>{`Country:${user.country}`}</Card.Text>
            </div>
          </Card.Body>
        </Card>
      )}
    </>
  );
}

export default Profile;
