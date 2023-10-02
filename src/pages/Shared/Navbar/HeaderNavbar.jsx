import React from "react";
import { Button, Container, Nav, NavDropdown } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { FaUserAlt } from "react-icons/fa";
import "./HeaderNavbar.css";

const HeaderNavbar = () => {
  return (
    <div>
      <Navbar
        collapseOnSelect
        expand="lg"
        className="bg-body-tertiary header-menu"
      >
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto">
              <Link to="/">Home</Link>
              <Link to="/about">About </Link>
              <Link to="/career">Career</Link>
            </Nav>
            <Nav>
              <p className="mb-0">
                <FaUserAlt size="30px" className="me-2"></FaUserAlt>
              </p>
              <Button variant="dark">Login</Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default HeaderNavbar;
