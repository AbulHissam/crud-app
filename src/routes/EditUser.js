import React, { useEffect, useState } from "react";
import { Button, Col, Form, Image, Row } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { axiosInstance } from "../Requests/requests";

function EditUser() {
  const [user, setUser] = useState();

  const navigate = useNavigate();
  const { id } = useParams();

  const putUser = async (values) => {
    try {
      const response = await axiosInstance.put(`/users/${id}`, {
        firstname: values.firstname,
        lastname: values.lastname,
        email: values.email,
        phone: values.phone,
        city: values.city,
        state: values.state,
        country: values.country,
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
        const response = await axiosInstance.get(`/users/${id}`);
        const user = response.data;
        if (response.status) {
          setUser({
            firstname: user.firstname,
            lastname: user.lastname,
            email: user.email,
            phone: user.phone,
            city: user.city,
            state: user.state,
            country: user.country,
          });
        }
      }
      fetchUser();
    } catch (err) {
      console.log(err);
    }
  }, []);

  const initialValues = {
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    city: "",
    state: "",
    country: "",
  };

  const EditSchema = Yup.object().shape({
    firstname: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    lastname: Yup.string()
      .min(1, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
    phone: Yup.string().min(10, "Minimum 10 numbers required"),
  });

  const { values, errors, touched, handleChange, handleBlur, handleSubmit } =
    useFormik({
      initialValues: user || initialValues,
      enableReinitialize: true,
      validationSchema: EditSchema,
      onSubmit: (values) => putUser(values),
    });

  return (
    <>
      <p className="h1 text-center text-primary border p-2">Edit user</p>
      {!user && <p className="mt-4 text-primary text-center h3">Loading...</p>}
      {user && (
        <div className="d-flex justify-content-center mt-5">
          <Form className="card shadow p-4" onSubmit={handleSubmit}>
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
                    name="firstname"
                    value={values.firstname}
                    placeholder="Enter your firstname"
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.firstname && touched.firstname && (
                    <span className="text-danger my-1">{errors.firstname}</span>
                  )}
                </Form.Group>
              </Col>
              <Col>
                <Form.Group>
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    name="lastname"
                    value={values.lastname}
                    placeholder="Enter your lastname"
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.lastname && <touched className="last"></touched> && (
                    <span className="text-danger">{errors.lastname}</span>
                  )}
                </Form.Group>
              </Col>
            </Row>
            <Form.Group>
              <Form.Label>Email</Form.Label>
              <Form.Control
                required
                type="email"
                name="email"
                value={values.email}
                placeholder="Enter your email"
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.email && (
                <span className="text-danger">{errors.email}</span>
              )}
            </Form.Group>
            <Form.Group>
              <Form.Label>Phone</Form.Label>
              <Form.Control
                required
                type="tel"
                name="phone"
                value={values.phone}
                placeholder="Enter your phone"
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.phone && (
                <span className="text-danger my-1">{errors.phone}</span>
              )}
            </Form.Group>
            <Row>
              <Col>
                <Form.Group>
                  <Form.Label>City</Form.Label>
                  <Form.Control
                    type="text"
                    name="city"
                    value={values.city}
                    placeholder="City"
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group>
                  <Form.Label>State</Form.Label>
                  <Form.Control
                    type="text"
                    name="state"
                    value={values.state}
                    placeholder="State"
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group>
                  <Form.Label>Country</Form.Label>
                  <Form.Control
                    type="text"
                    name="country"
                    value={values.country}
                    placeholder="Country"
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Button type="submit" className="w-50 mt-4 mx-auto">
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
