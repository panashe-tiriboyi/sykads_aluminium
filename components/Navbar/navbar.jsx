import React, { Component } from "react";

import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";

const Navigation = () => {
  return (
    <Navbar
      className="NavBar"
      expand="lg"
      variant="dark"
      style={{
        background: "rgba(3, 100, 109, 1) ",
        position: "fixed",
        width: "100%",
        zIndex: "1000",
        margin: "0",
      }}
    >
      <Container>
        <Navbar.Brand
          className="Brand"
          href="#home"
          style={{ margin: "0px", padding: "0px" }}
        >
          <img src="./logo.svg" width="80vw" alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse
          className="justify-content-md-centre"
          id="basic-navbar-nav "
          style={{ margin: "15px" }}
        >
          <Nav
            className="me-auto "
            style={{
              justifyContent: "center",
              position: "relative",

              left: "50%",
              transform: "translate(-50%)",
            }}
          >
            <Nav.Link
              className="btn btn-outline-secondary btn-sm text-light mx-2 "
              href="#home"
            >
              Home
            </Nav.Link>
            <Nav.Link
              className="btn btn-outline-secondary btn-sm text-light mx-2"
              href="#aboutUs"
            >
              About Us
            </Nav.Link>

            <Nav.Link
              className="btn btn-outline-secondary btn-sm text-light mx-2"
              href="#Products"
            >
              Products
            </Nav.Link>

            <Nav.Link
              className="btn btn-outline-secondary btn-sm text-light mx-2"
              href="#contactUs"
            >
              ContactUs
            </Nav.Link>
            <li>
              <i className="fas fa-phone mt-4 fa-2x "></i>
              <a className="Contact m-0">
                <p className=" text-light">Cell:</p>
              </a>
            </li>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
