import React from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

const Register = () => {
  const handleRegister = (e) => {
    e.preventDefault();
    console.log("reg");
  };
  return (
    <div className="mx-auto w-50 py-5">
      <h2 className="text-center">Register Now</h2>
      <Form onSubmit={handleRegister}>
        <Form.Group className="mb-3" controlId="fullName">
          <Form.Label>Full Name</Form.Label>
          <Form.Control type="text" placeholder="John Doe" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="email">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="name@example.com" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="************" />
        </Form.Group>
        <div></div>
        <div className="mb-3 text-center">
          Already have account? Please <Link to="/login">Login</Link>
        </div>
        <Button type="submit" variant="primary" className="px-5">
          Register
        </Button>
      </Form>
    </div>
  );
};

export default Register;
