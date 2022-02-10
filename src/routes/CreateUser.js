import React, { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { axiosInstance } from "./Requests/requests";

function CreateUser() {
  const navigate = useNavigate();

  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("");

  async function createUser(e) {
    try {
      const response = await axiosInstance.post("/users", {
        data: {
          firstname,
          lastname,
          email,
          phone,
          city,
          state,
          country,
        },
      });
      if (response.status) {
        alert("user created successfully");
        navigate("/users");
      }
    } catch (err) {
      console.log(err);
    }
  }

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
                  Country
                  onChange={(e) => setCountry(e.target.value)}
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Button
              type="submit"
              className="w-50 mt-4 mx-auto"
              onClick={(e) => createUser(e)}
            >
              Create
            </Button>
          </Row>
        </Form>
      </div>
    </>
  );
}

export default CreateUser;
