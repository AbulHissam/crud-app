import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Col, Form, Image, Row } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";

function EditUser() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("");
  const [fetched, setFetched] = useState(false);

  const navigate = useNavigate();

  const { id } = useParams();
  const url = process.env.REACT_APP_API_URL + `/${id}`;

  const putUser = async (e) => {
    try {
      e.preventDefault();
      const response = await axios(url, {
        method: "PUT",
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
        alert("user updated successfully");
        navigate("/users");
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    try {
      async function fetchUser() {
        const response = await axios(url);
        const user = response.data;
        if (response.status) setFetched(true);
        setFirstname(user.firstname);
        setFirstname(user.firstname);
        setLastname(user.lastname);
        setEmail(user.email);
        setPhone(user.phone);
        setCity(user.city);
        setState(user.state);
        setCountry(user.country);
      }
      fetchUser();
    } catch (err) {
      console.log(err);
    }
  }, []);

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
              src={`https://i.pravatar.cc/200?img=${id}`}
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
                    value={firstname}
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
                    value={lastname}
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
                value={phone}
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
              <Button
                type="submit"
                onClick={(e) => putUser(e)}
                className="w-50 mt-4 mx-auto"
              >
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
