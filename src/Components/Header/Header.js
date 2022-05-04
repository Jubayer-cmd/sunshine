import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="hid">
      <Navbar collapseOnSelect expand="lg" sticky="top" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="/" className="fw-bold fs-4 text-white">
            <img
              height={50}
              src={
                "https://i.ibb.co/mGmpWnn/Home-electronic-device-logo-removebg-preview.png"
              }
              alt="jfdh"
            />{" "}
            Gadget-X
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto"></Nav>
            <Nav>
              <NavLink
                as={Link}
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "fs-5 text-warning px-2"
                    : "fs-5 text-white text-decoration-none px-2"
                }
              >
                Home
              </NavLink>
              <NavLink
                as={Link}
                to="/manage"
                className={({ isActive }) =>
                  isActive
                    ? "fs-5 text-warning px-2"
                    : "fs-5 text-white text-decoration-none px-2"
                }
              >
                Manage Items
              </NavLink>
              <NavLink
                as={Link}
                to="/additems"
                className={({ isActive }) =>
                  isActive
                    ? "fs-5 text-warning px-2"
                    : "fs-5 text-white text-decoration-none px-2"
                }
              >
                Add Items
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
