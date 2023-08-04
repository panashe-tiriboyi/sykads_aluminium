import React, { Component } from "react";

import Navbar from "react-bootstrap/Navbar";
import { Container, Row, Col } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import classes from "../../styles/navbar.module.css";
import Image from "next/image";

const Navigation = () => {
  return (
    <Navbar
      className="NavBar"
      expand="lg"
      variant="dark"
      style={{
        background: "rgba(60, 67, 67, 0.935) ",
        position: "fixed",
        width: "100%",

        zIndex: "1000",
        margin: "0",
        padding: "0",
      }}
    >
      <Container>
        <Navbar.Brand className="Brand" href="/">
          <Image
            className={classes.logo_svg}
            src="/drawing.svg"
            width={150}
            height={100}
            alt=""
          />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse
          className="justify-content-md-centre"
          id="basic-navbar-nav "
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
              href="/"
            >
              Home
            </Nav.Link>

            <Nav.Link
              className="btn btn-outline-secondary btn-sm text-light mx-2"
              href="/products"
            >
              Products
            </Nav.Link>
            <Nav.Link
              className="btn btn-outline-secondary btn-sm text-light mx-2"
              href="/services"
            >
              Services
            </Nav.Link>

            <Nav.Link
              className="btn btn-outline-secondary btn-sm text-light mx-2"
              href="/#contactUs"
            >
              ContactUs
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
