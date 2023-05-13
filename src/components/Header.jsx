import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home" className="fs-3">
          CoffeWala
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto ">
            <Link to="/" className="px-2 text-decoration-none text-dark">
              Home
            </Link>
            <Link to="/menu" className="px-2 text-decoration-none text-dark">
              Menu
            </Link>
            <Link to="/login" className="px-2 text-decoration-none text-dark">
              Login
            </Link>
            <Link
              to="/register"
              className="px-2 text-decoration-none text-dark"
            >
              Resister
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
