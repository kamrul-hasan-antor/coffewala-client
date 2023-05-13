import React, { useContext } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleSignOut = () => {
    logOut()
      .then(() => {})
      .catch((err) => console.log(err));
  };

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand className="fs-3">
          <Link to="/" className="px-2 text-decoration-none text-dark">
            CoffeeWala
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Link to="/" className="px-2 text-decoration-none text-dark">
              Home
            </Link>

            {user?.email ? (
              <>
                <Link
                  to="/menu"
                  className="px-2 text-decoration-none text-dark"
                >
                  Menu
                </Link>
                <Link
                  to="/addItems"
                  className="px-2 text-decoration-none text-dark"
                >
                  Add Items
                </Link>
                <Link
                  onClick={handleSignOut}
                  to="/login"
                  className="px-2 text-decoration-none text-dark"
                >
                  Logout
                </Link>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="px-2 text-decoration-none text-dark"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="px-2 text-decoration-none text-dark"
                >
                  Resister
                </Link>
              </>
            )}
            {user?.email ? (
              <p className="px-2 text-primary text-capitalize mb-0">
                {user?.displayName}
              </p>
            ) : (
              ""
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
