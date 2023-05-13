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
  console.log(user);
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
            {user?.email ? (
              <Link
                onClick={handleSignOut}
                to="/login"
                className="px-2 text-decoration-none text-dark"
              >
                Logout
              </Link>
            ) : (
              <div>
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
              </div>
            )}
            {user?.email ? (
              <p className="px-2 text-primary text-capitalize">
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
