import React from "react";
import classes from "../../styles/card.module.css";
import { Col } from "react-bootstrap";
import Image from "next/image";
import Link from "next/link";

const Card = ({ title, description, image_url }) => {
  const customMessage = `Hello, I am interested in your ${title}!`;
  const queryParams = encodeURIComponent(customMessage);

  return (
    <Col xs={12} sm={12} md={6} lg={4}>
      <div className={classes.card}>
        <Image
          src={image_url}
          alt=""
          width={800}
          height={500}
          layout="responsive"
        />
        <h2>{title}</h2>
        <p>{description}</p>
        <Link href={`/?message=${encodeURIComponent(customMessage)}#contactUs`}>
          <a className={classes.cta_button}>Get Quotation</a>
        </Link>
      </div>
    </Col>
  );
};

export default Card;
