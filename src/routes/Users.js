import { useEffect, useState } from "react";
import { Button, Card, Col, Container, Image, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { axiosInstance } from "./Requests/requests";

function User() {
  const [users, setUsers] = useState([]);
  const [deleted, setDeleted] = useState(false);

  const deleteUser = async (id) => {
    try {
      const response = await axiosInstance.delete(`/users/${id}`);
      if (response.status) {
        alert("user deleted successfully");
        setDeleted(true);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    async function fetchUsers() {
      try {
        const response = await axiosInstance.get("/users");
        const { data } = response;
        setUsers(data);
      } catch (err) {
        console.log(err);
      }
    }
    fetchUsers();
  }, [deleted]);

  return (
    <>
      <div className="d-flex align-items-center border p-2">
        <Link
          to="/"
          style={{
            position: "absolute",
            top: 30,
            right: 200,
          }}
        >
          Home
        </Link>
        <p className="h1 text-primary mx-auto">Users</p>
      </div>
      <Container className="my-4">
        <Row className="justify-content-between">
          {users.map((user) => {
            return (
              <Col key={user.id} lg={4} md={6}>
                <Card className="shadow m-0 mb-4">
                  <Card.Body className="d-flex align-items-center gap-2">
                    <Link to={`/profile/${user.id}`}>
                      <Image
                        src={`https://i.pravatar.cc/200?img=${user.id}`}
                        alt={`${user.id}-avatar`}
                        roundedCircle
                        style={{
                          width: "48px",
                          height: "48px",
                        }}
                      ></Image>
                    </Link>
                    <div style={{ overflow: "hidden" }}>
                      <Card.Title>{`${user.firstname},${user.lastname}`}</Card.Title>
                      <Card.Text className="mb-1">{`Email:${user.email}`}</Card.Text>
                      <Card.Text>{`Phone:${user.phone}`}</Card.Text>
                    </div>
                  </Card.Body>
                  <Card.Footer className="d-flex align-items-center justify-content-between">
                    <Link to={`/edit-users/${user.id}`}>
                      <Button>Edit</Button>
                    </Link>
                    <Button
                      variant="danger"
                      onClick={() => deleteUser(user.id)}
                    >
                      Delete
                    </Button>
                  </Card.Footer>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    </>
  );
}

export default User;
