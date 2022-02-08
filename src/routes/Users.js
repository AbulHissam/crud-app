import { Button, Card, Col, Container, Image, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { UsersState } from "../context/Context";

function User() {
  const url = process.env.REACT_APP_API_URL;

  const {
    state: { users },
    dispatch,
  } = UsersState();

  return (
    <>
      <p className="h1 text-center text-primary border p-2">Users</p>
      <Container className="my-4">
        <Row className="justify-content-between">
          {users?.map((user) => {
            return (
              <Col key={user.id} lg={4} md={6}>
                <Card className="shadow m-0 mb-4">
                  <Card.Body className="d-flex align-items-center gap-2">
                    <Link to={`/profile/${user.id}`}>
                      <Image
                        src={`${user.avatar}`}
                        alt={`${user.id}-avatar`}
                        roundedCircle
                        style={{
                          width: "48px",
                          height: "48px",
                        }}
                      ></Image>
                    </Link>
                    <div style={{ overflow: "hidden" }}>
                      <Card.Title>{`${user.firstName},${user.lastName}`}</Card.Title>
                      <Card.Text className="mb-1">{`Email:${user.email}`}</Card.Text>
                      <Card.Text>{`Phone:${user.phoneNumber}`}</Card.Text>
                    </div>
                  </Card.Body>
                  <Card.Footer className="d-flex align-items-center justify-content-between">
                    <Link to={`/edit-users/${user.id}`}>
                      <Button>Edit</Button>
                    </Link>
                    <Button
                      variant="danger"
                      onClick={() =>
                        dispatch({
                          type: "DELETE",
                          payload: {
                            id: user.id,
                          },
                        })
                      }
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
