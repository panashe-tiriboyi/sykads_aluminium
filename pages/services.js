import React from "react";
import Head from "next/head";
import "bootstrap/dist/css/bootstrap.css";
import { Container, Col, Row } from "react-bootstrap";
import Navigation from "../components/Navbar/navbar";
import Card from "../components/Card/card";
import classes from "../styles/Services.module.css";
import Footer from "../components/Footer";
import Image from "next/image";

const services = () => {
  return (
    <div>
      <Head>
        <title>Sykads aluminium Solution</title>
        <link rel="icon" href="/logo.png" />
      </Head>
      <div>
        <Navigation />
      </div>
      <main style={{ width: "100%", paddingTop: "115px" }}>
        <div className={classes.serviceWelcome}>
          <div className={classes.image}>
            <Image
              src="/LOGO.png"
              alt=""
              width={600}
              height={300}
              className={classes.logo}
            />
          </div>
        </div>
        <div className={classes.explore}>
          <h1>Explore Our Services - Elevate Your Construction Projects</h1>
        </div>
        <Container>
          <Row>
            <Card
              title="Custom Design and Fabrication"
              description="At Sykads Aluminium Solutions, we offer custom design and fabrication services to cater to your unique requirements. Our team of skilled professionals will work closely with you to create bespoke aluminum windows and doors that perfectly complement your space and vision."
              image_url="/glass-window.jpg"
            />
            <Card
              title="Installation Services"
              description="Ensure a seamless and precise installation with our expert installation services. Our trained technicians will handle the installation process efficiently, ensuring that your aluminum windows and doors fit flawlessly and function optimally."
              image_url="/male-worker-factory.jpg"
            />
            <Card
              title="Maintenance and Repairs"
              description="To ensure your aluminum products continue to perform at their best, we provide maintenance and repair services. Whether it's routine maintenance or addressing any issues, our team will keep your aluminum solutions in top condition."
              image_url="/maintanance2.jpg"
            />
          </Row>
          <Row className={classes.discover}>
            <p>
              Discover a world of possibilities with Sykads Aluminium
              Solutions&qout; comprehensive services. Let us be your partner in
              creating spaces that inspire and endure.
            </p>
          </Row>
        </Container>
      </main>
      <Footer />
    </div>
  );
};

export default services;
