import faker from "@faker-js/faker";
import React, { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { UsersState } from "../context/Context";

function CreateUser() {
  const [firstName, setFirstname] = useState("");
  const [lastName, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("");

  const navigate = useNavigate();

  const { dispatch } = UsersState();

  const handleClick = () => {
    dispatch({
      type: "ADD",
      payload: {
        id: faker.datatype.uuid(),
        avatar: faker.internet.avatar(),
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

  return (
    <>
      <p className="h1 text-center text-primary border p-2">Create user</p>
      <div className="d-flex justify-content-center mt-5">
        <Form className="card shadow p-4">
          <Row>
            <Col>
              <Form.Group>
                <Form.Label>First Name</Form.Label>
                <Form.Control
                  required
                  type="text"
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
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Phone</Form.Label>
            <Form.Control
              required
              type="tel"
              placeholder="Enter your phone"
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
                  onChange={(e) => setCountry(e.target.value)}
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Button className="w-50 mt-4 mx-auto" onClick={handleClick}>
              Create
            </Button>
          </Row>
        </Form>
      </div>
    </>
  );
}

export default CreateUser;
