import React from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

const Login = () => {
  const handleLogin = (e) => {
    e.preventDefault();
    console.log("in");
  };
  return (
    <div className="mx-auto w-50 py-5">
      <h2 className="text-center">Login</h2>
      <Form onSubmit={handleLogin}>
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
          New in CoffeWala ? Please <Link to="/register">Register Now</Link>{" "}
        </div>
        <Button type="submit" variant="primary" className="px-5">
          Log In
        </Button>
      </Form>
    </div>
  );
};

export default Login;
