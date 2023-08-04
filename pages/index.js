import Head from "next/head";
import "bootstrap/dist/css/bootstrap.css";
import { Container, Col, Row } from "react-bootstrap";
import Navigation from "../components/Navbar/navbar";
import classes from "../styles/Home.module.css";
import Image from "next/image";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useState, useEffect } from "react";
import Footer from "../components/Footer";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  const [message, setMessage] = useState("");

  useEffect(() => {
    // Check if "message" exists in the query parameter
    const customMessage = router.query.message;
    if (customMessage) {
      // Retrieve the custom message from the query parameter
      const decodedMessage = decodeURIComponent(customMessage);
      setMessage(decodedMessage);
    }
  }, [router.query.message]);

  return (
    <div className={classes.index}>
      <Head>
        <title>Sykads Aluminium Solutions</title>
        <link rel="icon" href="/drawing.svg" />
      </Head>
      <div>
        <Navigation />
      </div>

      <main style={{ width: "100%", paddingTop: "115px" }}>
        <div className={classes.home}>
          <div className={classes.image}>
            <Image
              src="/LOGO.png"
              alt=""
              width={600}
              height={300}
              className={classes.logo}
            />
          </div>
          <div className={classes.elevate}>
            Elevate Your Spaces with Quality Aluminum Solutions!
          </div>
        </div>
        <Container fluid className={classes.welcome}>
          <h1>Welcome to Sykads Aluminium Solutions</h1>
          <div>
            <p className={classes.motto}>Believe in Better</p>
          </div>
          <div>
            <p>
              At Sykads Aluminium Solutions, we take immense pride in offering a
              diverse range of top-of-the-line aluminum windows and doors. Our
              products are designed to elevate your living spaces, combining
              aesthetics, functionality, and energy efficiency to create the
              perfect solution for your home or business. Whether you seek
              modern elegance, enhanced security, or energy savings, our
              aluminum offerings have got you covered.
            </p>
            <div className={classes.door3}>
              <Image
                src="/windows/house.png"
                alt=""
                width={500}
                height={400}
                layout="responsive"
              />
            </div>

            <Row className={classes.whyChoose}>
              <h3>Why Choose Sykads Aluminium Solutions?</h3>
              <Col
                xs={12}
                sm={12}
                md={6}
                style={{
                  textAlign: "start",
                }}
              >
                <ul>
                  <li>
                    <b>Uncompromising Quality</b>: We prioritize quality at
                    every step of the manufacturing process, ensuring that each
                    product meets the highest standards of craftsmanship and
                    durability.
                  </li>
                  <li>
                    <b>Trusted Expertise</b>: With years of experience in the
                    industry, our team of experts is dedicated to providing you
                    with expert guidance and personalized solutions.
                  </li>
                  <li>
                    <b>Customer Satisfaction</b>: Your satisfaction is our top
                    priority. We strive to exceed your expectations by
                    delivering products that elevate your spaces and enhance
                    your lifestyle.
                  </li>
                </ul>
              </Col>
              <Col>
                <Image
                  src="/maintanance.jpg"
                  alt=""
                  width={500}
                  height={350}
                  layout="responsive"
                />
              </Col>
            </Row>
            <div className={classes.explore}>
              <p>
                Explore our website to discover our extensive product line and
                find the perfect aluminum solutions for your needs. Experience
                the beauty, energy efficiency, and durability of our products
                that bring lasting value to your space.
              </p>
              <Button
                variant="primary"
                href="/products"
                style={{
                  margin: "20px",
                  width: "200px",
                  height: "60px",
                  fontSize: "x-large",
                }}
              >
                Products
              </Button>
              <Button
                variant="primary"
                href="/services"
                style={{
                  margin: "20px",
                  width: "200px",
                  height: "60px",
                  fontSize: "x-large",
                }}
              >
                Services
              </Button>
            </div>
          </div>
          <Row className={classes.Contact} id="contactUs">
            <h3>Get in Touch - Let&apos;s Create Your Ideal Space Together!</h3>
            <p>
              Have questions about our aluminum solutions or need assistance
              choosing the perfect windows and doors for your space? We&apos;re
              here to help! Contact our dedicated team at Sykads Aluminium
              Solutions, and let&apos;s discuss your requirements.
            </p>
            <h3>Contact Information</h3>
            <p>
              <b>Phone:</b>+263 77 614 453
            </p>
            <p>
              <b>Email:</b>operations@sykadsaluminium.com
            </p>

            <Form>
              <Form.Group
                style={{
                  textAlign: "start",
                }}
                className="mb-3"
                controlId="formEmail"
              >
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter your email" />
                <Form.Text className="text-muted">
                  We&apos;ll never share your email with anyone else.
                </Form.Text>
              </Form.Group>
              <Form.Group
                style={{
                  textAlign: "start",
                }}
                className="mb-3"
                controlId="formMessage"
              >
                <Form.Label>Message</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  placeholder="Enter message here"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </Form.Group>

              <Button
                variant="primary"
                type="submit"
                style={{
                  margin: "20px",
                  width: "200px",
                  height: "60px",
                  fontSize: "x-large",
                }}
              >
                Send
              </Button>
            </Form>
            <p>
              <b>Address:</b> 4041 Coventry Rd, Harare, Zimbabwe
            </p>
            <h3>Operating Hours</h3>
            <p>
              <b>Monday to Friday:</b> 8am - 4pm
            </p>
            <p>
              <b>Saturday:</b> 8am - 12pm
            </p>
            <p>
              <b>Sunday:</b> Closed
            </p>
          </Row>
        </Container>
      </main>
      <Footer />
    </div>
  );
}
