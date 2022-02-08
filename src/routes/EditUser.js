import React, { useEffect, useState } from "react";
import { Button, Col, Form, Image, Row } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { UsersState } from "../context/Context";

function EditUser() {
  const navigate = useNavigate();

  const { id } = useParams();

  const {
    state: { users },
    dispatch,
  } = UsersState();

  const user = users.find((usr) => usr.id === id);

  const [firstName, setFirstname] = useState(user.firstName);
  const [lastName, setLastname] = useState(user.lastName);
  const [email, setEmail] = useState(user.email);
  const [phoneNumber, setPhone] = useState(user.phoneNumber);
  const [city, setCity] = useState(user.city);
  const [state, setState] = useState(user.state);
  const [country, setCountry] = useState(user.country);
  const [fetched, setFetched] = useState(false);

  const handleClick = () => {
    dispatch({
      type: "UPDATE",
      payload: {
        ...user,
        firstName,
        lastName,
        email,
        phoneNumber,
        city,
        state,
        country,
      },
    });
    navigate("/users");
  };

  useEffect(() => {
    setFetched(true);
  }, [user]);

  return (
    <>
      <p className="h1 text-center text-primary border p-2">Edit user</p>
      {!fetched && (
        <p className="mt-4 text-primary text-center h3">Loading...</p>
      )}
      {fetched && (
        <div className="d-flex justify-content-center mt-5">
          <Form className="card shadow p-4">
            <Image
              src={user.avatar}
              alt={`${id}-avatar`}
              roundedCircle
              style={{
                width: "100px",
                height: "100px",
                margin: "0 auto",
                marginBottom: "1rem",
              }}
            ></Image>
            <Row>
              <Col>
                <Form.Group>
                  <Form.Label>First Name</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    name="firstName"
                    value={firstName}
                    placeholder="Enter your firstname"
                    onChange={(e) => setFirstname(e.target.value)}
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group>
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder="Enter your lastname"
                    value={lastName}
                    onChange={(e) => setLastname(e.target.value)}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Form.Group>
              <Form.Label>Email</Form.Label>
              <Form.Control
                required
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Phone</Form.Label>
              <Form.Control
                required
                type="tel"
                placeholder="Enter your phone"
                value={phoneNumber}
                onChange={(e) => setPhone(e.target.value)}
              />
            </Form.Group>
            <Row>
              <Col>
                <Form.Group>
                  <Form.Label>City</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder="City"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group>
                  <Form.Label>State</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder="State"
                    value={state}
                    onChange={(e) => setState(e.target.value)}
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group>
                  <Form.Label>Country</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder="Country"
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Button onClick={handleClick} className="w-50 mt-4 mx-auto">
                Save
              </Button>
            </Row>
          </Form>
        </div>
      )}
    </>
  );
}

export default EditUser;
