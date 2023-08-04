import React from "react";
import Head from "next/head";
import "bootstrap/dist/css/bootstrap.css";
import { Container, Col, Row } from "react-bootstrap";
import Navigation from "../components/Navbar/navbar";
import Card from "../components/Card/card";
import classes from "../styles/products.module.css";
import Footer from "../components/Footer";
import Image from "next/image";

const products = () => {
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
        <div className={classes.productWelcome}>
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
        <div className={classes.discover}>
          <h1>
            Discover Our Premium Product Line - Elevate Your Spaces Today!
          </h1>
        </div>
        <Container>
          <Row>
            <Card
              title="Aluminum Windows"
              description="Experience the beauty of natural light and seamless outdoor views with our stunning aluminum windows. Choose from a variety of styles, including casement, sliding, awning, and fixed windows, tailored to match your preferences and architectural requirements. Our aluminum windows are not only visually appealing but also provide exceptional thermal performance, contributing to a more energy-efficient home or workspace."
              image_url="/big-window-with-sunshine.jpg"
            />
            <Card
              title="Aluminum Doors"
              description="Welcome guests in style with our premium aluminum doors. From sleek sliding doors that effortlessly connect your indoor and outdoor spaces to sturdy and secure entrance doors that enhance your property's curb appeal, our collection offers options for every need. Enjoy peace of mind with our doors' robust construction and advanced security features, ensuring your safety and that of your loved ones."
              image_url="/building-glass-entrance.jpg"
            />
            <Card
              title="Energy-Efficient Solutions"
              description="Reduce your environmental footprint while saving on energy bills with our energy-efficient aluminum products. Our innovative designs and high-quality materials help maintain optimal indoor temperatures, keeping your home cool during hot summers and warm in chilly winters. Embrace sustainability without compromising on style or comfort."
              image_url="/energyEfficient.jpg"
            />
            <Card
              title="Customization Options"
              description="At Sykads Aluminium Solutions, we understand that every space is unique. That's why we offer customization options for our aluminum windows and doors. Tailor the size, color, and design to match your interior and exterior aesthetics, making your living or working space truly one-of-a-kind."
              image_url="/customize.jpg"
            />
            <Card
              title="Low Maintenance and Durability"
              description="Bid farewell to the hassle of frequent upkeep with our low-maintenance aluminum solutions. Our products are engineered to withstand the test of time, resistant to rust, rot, and corrosion. You can count on our aluminum windows and doors to maintain their pristine appearance and performance, year after year."
              image_url="/maintanance.jpg"
            />
            <Card
              title="Commercial Solutions"
              description="Enhance your commercial space with our range of commercial aluminum windows and doors. From modern storefronts to functional office entrances, our products are designed to create a lasting impression while ensuring security and efficiency for your business"
              image_url="/empty-closed-door.jpg"
            />
          </Row>
          <Row className={classes.transform}>
            <p>
              Transform your space with the unmatched elegance and performance
              of Sykads Aluminium Solutions&apos; aluminum windows and doors.
              Browse our product offerings and get in touch with our friendly
              team to find the perfect aluminum solution for you!
            </p>
          </Row>
        </Container>
      </main>
      <Footer />
    </div>
  );
};

export default products;
