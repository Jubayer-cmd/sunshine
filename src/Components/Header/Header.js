import { signOut } from "firebase/auth";
import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, NavLink } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "./../../firebase.init";

const Header = () => {
  const [user] = useAuthState(auth);
  const logout = () => {
    signOut(auth);
    toast("Logging Out successfully");
  };
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
                    ? "fs-5 text-warning px-3"
                    : "fs-5 text-white text-decoration-none px-3"
                }
              >
                Home
              </NavLink>
              <NavLink
                as={Link}
                to="/blogs"
                className={({ isActive }) =>
                  isActive
                    ? "fs-5 text-warning px-3"
                    : "fs-5 text-white text-decoration-none px-3"
                }
              >
                Blogs
              </NavLink>
              {user ? (
                <>
                  {" "}
                  <NavLink
                    as={Link}
                    to="/manage"
                    className={({ isActive }) =>
                      isActive
                        ? "fs-5 text-warning px-3"
                        : "fs-5 text-white text-decoration-none px-3"
                    }
                  >
                    Manage Items
                  </NavLink>
                  <NavLink
                    as={Link}
                    to="/additems"
                    className={({ isActive }) =>
                      isActive
                        ? "fs-5 text-warning px-3"
                        : "fs-5 text-white text-decoration-none px-3"
                    }
                  >
                    Add Items
                  </NavLink>
                  <NavLink
                    as={Link}
                    to="/order"
                    className={({ isActive }) =>
                      isActive
                        ? "fs-5 text-warning px-3"
                        : "fs-5 text-white text-decoration-none px-3"
                    }
                  >
                    My items
                  </NavLink>
                  <Button onClick={logout}>SignOut</Button>
                </>
              ) : (
                <NavLink
                  as={Link}
                  to="/login"
                  className={({ isActive }) =>
                    isActive
                      ? "fs-5 text-warning px-3"
                      : "fs-5 text-white text-decoration-none px-3"
                  }
                >
                  SignIn
                </NavLink>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
