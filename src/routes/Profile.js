import React, { useEffect, useState } from "react";
import { Card, Image } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { axiosInstance } from "./Requests/requests";

function Profile() {
  const { id } = useParams();

  const [user, setUser] = useState();
  const [fetched, setFetched] = useState(false);

  useEffect(() => {
    try {
      async function getUser() {
        const response = await axiosInstance.get(`/users/${id}`);
        const { data } = response;
        setUser(data);
        if (response.status) {
          setFetched(true);
        }
      }
      getUser();
    } catch (err) {
      console.log(err);
    }
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
              src={`https://i.pravatar.cc/200?img=${id}`}
              alt={`${id}-avatar`}
              roundedCircle
              style={{
                width: "100px",
                height: "100px",
              }}
            ></Image>

            <div style={{ overflow: "hidden", textAlign: "center" }}>
              <Card.Title>{`${user.firstname},${user.lastname}`}</Card.Title>
              <Card.Text>{`Email:${user.email}`}</Card.Text>
              <Card.Text>{`Phone:${user.phone}`}</Card.Text>
              <Card.Text>{`City:${user.city}`}</Card.Text>
              <Card.Text>{`State:${user.state}`}</Card.Text>
              <Card.Text>{`Country:${user.country}`}</Card.Text>
            </div>
          </Card.Body>
          <Card.Footer className="d-flex align-items-center justify-content-center w-100 bg-white">
            <Link
              to={`/edit-users/${id}`}
              className="btn btn-primary flex-grow-1 mx-5 "
            >
              Edit
            </Link>
          </Card.Footer>
        </Card>
      )}
    </>
  );
}

export default Profile;
